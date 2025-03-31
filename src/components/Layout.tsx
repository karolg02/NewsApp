import {AppShell, Group, rem} from '@mantine/core';
import {useHeadroom} from '@mantine/hooks';
import {IconNews} from "@tabler/icons-react"
import {Outlet} from "react-router-dom";

export const Layout = () => {
    const pinned = useHeadroom({ fixedAt: 120 });

    return (
        <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
            <AppShell.Header>
                <Group h="100%" px="md">
                    <IconNews/>NewsApp
                </Group>
            </AppShell.Header>

            <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
}