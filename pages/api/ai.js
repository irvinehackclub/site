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
        const { projectId, projectName, projectSlug, success } = await fetch("https://api.vaq.dev/projects/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token,
                prompt
            })
        }).then(res => res.json());

        if (!success) {
            return res.status(401).json({
                response: errorResponse
            });
        }
        
        const response = 'not implemented';

        await fetch("https://hooks.slack.com/triggers/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", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                project_id: projectId,
                project_name: projectName,
                project_url: `https://${projectSlug}.vaquero.dev`,
                prompt,
                response
            })
        });

        return res.status(200).json({
            response
        });
    } catch (err) {
        return res.status(401).json({
            response: errorResponse
        });
    }
}