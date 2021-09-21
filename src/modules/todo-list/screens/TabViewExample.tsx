import { Box } from '@components/box'
import { Container } from '@components/container'
import { Scrollable } from '@components/scrollable'
import { TabView } from '@components/tabview'
import React, { useState } from 'react'
import { Text } from 'react-native'

export const TabViewExample = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <Container>
            <Text>test text</Text>
            <Text>test text</Text>
            <Text>test text</Text>
            <TabView
                styles={{ flex: 1 }}
                activeIndex={activeIndex}
                onTabIndexChanged={setActiveIndex}
                maxItemsPerScreen={3}
                tabBarItemStyles={{
                    textStyles: {
                        textTransform: 'uppercase',
                    }
                }}
                tabBarItems={[
                    { title: "Home" },
                    { title: "Videos" },
                    { title: "Playlists" },
                    { title: "Community" },
                    { title: "Channels" },
                    { title: "About" },
                ]}
                tabPages={[
                    (tabBarItem) => <TabView.Page><Scrollable>{new Array(100).fill(1).map((e, i) => <Text key={i}>page content {i}</Text>)}</Scrollable></TabView.Page>,
                    (tabBarItem) => <TabView.Page><Text>Page {tabBarItem.title}</Text></TabView.Page>,
                    (tabBarItem) => <TabView.Page><Text>Page {tabBarItem.title}</Text></TabView.Page>,
                    (tabBarItem) => <TabView.Page><Text>Page {tabBarItem.title}</Text></TabView.Page>,
                    (tabBarItem) => <TabView.Page><Text>Page {tabBarItem.title}</Text></TabView.Page>,
                    (tabBarItem) => <TabView.Page><Text>Page {tabBarItem.title}</Text></TabView.Page>,
                ]} />
            <Text>test text</Text>
            <Text>test text</Text>
            <Text>test text</Text>
        </Container>
    )
}