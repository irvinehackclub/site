import Icon from "@hackclub/icons";
import { useState } from "react";
import { Box, Button, Card, Flex, Heading } from "theme-ui";

function DefaultBox ({ children, modalState }) {
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
            opacity: modalState.isOpen ? 1 : 0,
            pointerEvents: modalState.isOpen ? 'auto' : 'none',
            transition: 'opacity .125s ease-in-out',
            overflow: 'hidden'
        }}>
            {children}
        </Box>
    );
}

function DefaultHeader ({ title, modalState }) {
    return (
        <>
            <Heading variant="headline" my={0}>
                {title}
            </Heading>
            <button style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                margin: 0
            }} onClick={() => modalState.close()}>
                <Icon glyph="view-close" size={32} />
            </button>
        </>
    )
}

function ContentShell ({ title, modalState, children }) {
    return (
        <DefaultBox modalState={modalState}>
            <Card sx={{
                maxWidth: '90vw',
                minWidth: '50vw',
                maxHeight: '90vh',
                overflow: 'auto',
                p: 3,
                zIndex: 1000000,
                position: 'relative'
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
                    <DefaultHeader title={title} modalState={modalState} /> 
                </Flex>
                {children}
            </Card>
        </DefaultBox>
    );
}

function BlocksShell ({ title, modalState, children }) {
    return (
        <DefaultBox modalState={modalState}>
            <Card sx={{
                maxWidth: '90vw',
                minWidth: '50vw',
                maxHeight: '90vh',
                overflow: 'auto',
                padding: '0px!important',
                zIndex: 1000000,
                position: 'relative'
            }}>
                <Flex sx={{
                    flexDirection: 'column',
                }}>
                    <Flex sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: [2, 3],
                        paddingLeft: ['16px', '32px'],
                        background: 'smoke'
                    }}>
                        <DefaultHeader title={title} modalState={modalState} /> 
                    </Flex>
                    {children}
                </Flex>
            </Card>
        </DefaultBox>
    )
}

export function useModal (title = "Modal", { shell = 'content' }) {
    const [isOpen, setIsOpen] = useState(false);

    let ModalShell;

    if (shell === 'content') ModalShell = ContentShell;
    else if (shell === 'blocks') ModalShell = BlocksShell;
    else if (shell instanceof Function) ModalShell = shell;
    else ModalShell = ContentShell;
    
    function Modal ({ children }) {
        return (
            <ModalShell
                title={title}
                modalState={{
                    isOpen,
                    open: () => setIsOpen(true),
                    close: () => setIsOpen(false),
                    toggle: () => setIsOpen(isOpen => !isOpen)
                }}
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