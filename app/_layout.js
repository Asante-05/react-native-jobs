import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  // const [FontsLoaded] = useFonts({
  //   DMbold: require("../assets/fonts/DMSans-Bold.ttf"),
  //   DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  //   DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  // });
  // loading fonts onto the screen

  // const onLayoutRootView = useCallback(async () => {
  // if (FontsLoaded) {
  // only show home page if fonts are loaded
  // await SplashScreen.hideAsync();
  // }
  // }, [FontsLoaded]);
  // if (!FontsLoaded) return null;

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  });

  return <Stack onLayout={onLayoutRootView} />;
};
export default Layout;
