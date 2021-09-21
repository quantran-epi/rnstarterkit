import React, { FunctionComponent, useEffect } from 'react'
import { ITabPageCollectionProps } from './ITabView'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import { View } from 'react-native';

export const TabPageCollection: FunctionComponent<ITabPageCollectionProps> = ({
    pages,
    activePageIndex,
    onPageChanged,
    styles
}) => {
    const pagerRef = React.createRef<PagerView>();

    useEffect(() => {
        if (pagerRef.current) pagerRef.current.setPage(activePageIndex);
    }, [activePageIndex])

    const onPageSelected = (event: PagerViewOnPageSelectedEvent) => {
        onPageChanged(event.nativeEvent.position);
    }

    return (
        <PagerView
            ref={pagerRef}
            style={[styles]}
            initialPage={0}
            onPageSelected={onPageSelected}>
            {pages.map((page, index) =>
                <View key={index} style={{ width: '100%', height: '100%' }}>
                    {page}
                </View>)}
        </PagerView>
    )
}