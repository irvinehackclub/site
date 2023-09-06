import Icon from "@hackclub/icons";
import { useState } from "react";
import { Box, Button, Card, Flex, Heading } from "theme-ui";

function DefaultShell ({ isOpen, title, open, close, toggle, children }) {
    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bg: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
            transition: 'opacity .125s ease-in-out',
            overflow: 'hidden'

        }}>
            <Card sx={{
                maxWidth: '90vw',
                minWidth: '50vw',
                maxHeight: '90vh',
                overflow: 'auto',
                p: 3,

            }}>
                <Flex sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    m: ['-16px', '-32px'],
                    p: [2, 3],
                    paddingLeft: ['16px', '32px'],
                    background: 'smoke',
                    marginBottom: '16px!important'
                }}>
                    <Heading variant="headline" my={0}>
                        {title}
                    </Heading>
                    <button style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        margin: 0
                    }} onClick={() => close()}>
                        <Icon glyph="view-close" size={32} />
                    </button>
                </Flex>
                {children}
            </Card>
        </Box>
    )
}

export function useModal (title = "Modal", shell = DefaultShell) {
    const [isOpen, setIsOpen] = useState(false);

    const ModalShell = shell;
    
    function Modal ({ children }) {
        return (
            <ModalShell
                isOpen={isOpen}
                title={title}
                open={() => setIsOpen(true)}
                close={() => setIsOpen(false)}
                toggle={() => setIsOpen(isOpen => !isOpen)}
            >
                {children}
            </ModalShell>
        );
    }

    Modal.toggle = () => setIsOpen(isOpen => !isOpen);
    Modal.open = () => setIsOpen(true);
    Modal.close = () => setIsOpen(false);

    return Modal;
}