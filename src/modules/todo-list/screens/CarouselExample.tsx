import { Box } from '@components/box';
import React, { useRef, useState } from 'react'
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');
const items = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
]

const renderBasicItem = (data: any) => {
    return (
        <View>
            <Image source={{ uri: data.item.illustration }}
                style={{ width: screenWidth - 60, height: screenWidth - 60 }}></Image>
            <Text>{data.item.title}</Text>
        </View>
    )
}

const renderFullwidthItem = (data: any) => {
    return (
        <View>
            <Image source={{ uri: data.item.illustration }}
                style={{ width: screenWidth, height: screenWidth }}></Image>
            <Text>{data.item.title}</Text>
        </View>
    )
}

const CarouselWithPagination = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const pagination = () => {
        return (
            <Pagination
                dotsLength={items.length}
                activeDotIndex={activeSlide}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    return <Box styles={{ marginBottom: 20, paddingTop: 15, paddingBottom: 15 }}>
        <Box styles={{ alignItems: 'center', marginBottom: 10 }}><Text>Carousel with pagination</Text></Box>
        <Carousel
            layout={"default"}
            data={items}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={screenWidth - 60}
            renderItem={renderBasicItem}
            onBeforeSnapToItem={(index) => setActiveSlide(index)} />
        {pagination()}
    </Box>
}

export const CarouselExample = () => {
    const basicCarouselRef = useRef(null)
    const parallaxCarouselRef = useRef(null)

    const renderParallaxItem = (data: { item: any; index: number }, parallaxProps?: any) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: data.item.illustration }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text numberOfLines={2}>
                    {data.item.title}
                </Text>
            </View>
        );
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <Box styles={{ marginBottom: 20, paddingTop: 15, paddingBottom: 15 }}>
                <Box styles={{ alignItems: 'center', marginBottom: 10 }}><Text>Basic carousel</Text></Box>
                <Carousel
                    layout={"default"}
                    ref={basicCarouselRef}
                    data={items}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={screenWidth - 60}
                    renderItem={renderBasicItem} />
            </Box>
            <Box styles={{ marginBottom: 20, paddingTop: 15, paddingBottom: 15 }}>
                <Box styles={{ alignItems: 'center', marginBottom: 10 }}><Text>Full width</Text></Box>
                <Carousel
                    layout={"default"}
                    ref={basicCarouselRef}
                    data={items}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={screenWidth}
                    renderItem={renderFullwidthItem} />
            </Box>
            <Box styles={{ marginBottom: 20, paddingTop: 15, paddingBottom: 15 }}>
                <Box styles={{ alignItems: 'center', marginBottom: 10 }}><Text>Full width (equal size)</Text></Box>
                <Carousel
                    layout={"default"}
                    ref={basicCarouselRef}
                    data={items}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={screenWidth}
                    renderItem={renderFullwidthItem} 
                    inactiveSlideScale={1}/>
            </Box>
            <Box styles={{ marginBottom: 20, paddingTop: 15, paddingBottom: 15 }}>
                <Box styles={{ alignItems: 'center', marginBottom: 10 }}><Text>Loop carousel</Text></Box>
                <Carousel
                    layout={"default"}
                    ref={basicCarouselRef}
                    data={items}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={screenWidth - 60}
                    renderItem={renderBasicItem}
                    loop />
            </Box>
            <CarouselWithPagination />
            <Box styles={{ marginBottom: 20, paddingTop: 15, paddingBottom: 15 }}>
                <Box styles={{ alignItems: 'center', marginBottom: 10 }}><Text>Autoplay carousel</Text></Box>
                <Carousel
                    layout={"default"}
                    ref={basicCarouselRef}
                    data={items}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={screenWidth - 60}
                    renderItem={renderBasicItem}
                    autoplay
                    enableMomentum={false}
                    lockScrollWhileSnapping />
            </Box>
            <Box styles={{ marginBottom: 20, paddingTop: 15, paddingBottom: 15 }}>
                <Box styles={{ alignItems: 'center', marginBottom: 10 }}><Text>Parallax carousel</Text></Box>
                <Carousel
                    ref={parallaxCarouselRef}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 60}
                    data={items}
                    renderItem={renderParallaxItem}
                    hasParallaxImages={true}
                />
            </Box>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});