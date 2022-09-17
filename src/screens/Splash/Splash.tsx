import { View, Text, Animated } from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { AppStackRoutes, StackNavigationProps } from '../../Routes/Navigation';
import Lottie from 'lottie-react-native';
import { useStyles } from '../../style/styles';

interface SplashScreenProps {
    navigation: StackNavigationProps<AppStackRoutes, 'Splash'>;
}

const Splash: FC<SplashScreenProps['navigation']> = (SplashScreenProps) => {
    const [fadeAnim] = useState(new Animated.Value(0));

    const styles = useStyles();

    const animationRef = useRef<Lottie>(null);

    useEffect(() => {
        console.log('Running useEffect');
        SplashScreenProps.navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        });

        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
        animationRef.current?.play();
    }, []);

    const animationFinishedHandler = () => {
        SplashScreenProps.navigation.navigate('Play');
    };

    return (
        <View style={styles.paddingContainer}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Text style={{ ...styles.titleText, color: 'black' }}>Let's Play !</Text>
            </Animated.View>

            <Lottie
                ref={animationRef}
                source={require('../../assets/lottie/tic-tac-toe.json')}
                autoPlay={false}
                loop={false}
                onAnimationFinish={animationFinishedHandler}
            />
        </View>
    );
};

export default Splash;
