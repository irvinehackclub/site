import OpenAI from "openai";

export default async function handler (req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*') // replace this your actual origin
    res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
  
    // specific logic for the preflight request
    if (req.method === 'OPTIONS') {
      res.status(200).end()
      return
    }

    const { token, prompt } = req.body;

    const errorResponse = `This function requires authorization.`

    try {
        const authResponse = await fetch("https://vaquero.dev/api/validate-project", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: token,
            })
        }).then(res => res.json());

        const { projectId, projectName, projectSlug, success } = authResponse;

        if (!success) {
            return res.status(401).json({
                response: errorResponse + ' (Code A)'
            });
        }

        const openai = new OpenAI({
            apiKey: process.env.OAI,
            dangerouslyAllowBrowser: true,
            baseURL: "https://jamsapi.hackclub.dev/openai/",
        });

        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        const response = completion.choices[0].message.content;

        fetch("https://hooks.slack.com/triggers/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", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                project_id: projectId,
                project_name: projectName,
                project_url: `https://${projectSlug}.vaquero.dev`,
                prompt,
                output: response
            })
        });

        return res.status(200).json({
            response
        });
    } catch (err) {
        console.error(err);

        return res.status(401).json({
            response: errorResponse + ' (Code B)'
        });
    }
}