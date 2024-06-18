import { StyleSheet } from "react-native";


export const stylesDefault = StyleSheet.create({
  ViewBody: {
    paddingHorizontal: 20,
    width: '100%',
    height: 'auto',
  },
  RedViewHeaderContainer: {
    backgroundColor: 'red',
    height: 120,
    width: '100%',
    paddingHorizontal: 30,

    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  RedViewFirstText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18
  },
  RedViewSecondText: {
    color: 'white',
    fontWeight: '800',
    marginLeft: 5,
    fontSize: 18
  },
  SmallText_Black_18_600: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18
  },
  SmallText_Black_30_600: {
    color: 'black',
    fontWeight: '600',
    fontSize: 30
  },
  View_Row_HSpaceBetween_VCenter_W100: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  View_Row_VCenter_W24_H12: {

    width: 24,
    alignItems: "center",
    height: 12
  },
  View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151: {
    backgroundColor: "#85d151",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 30,
    width: 30,
  },
  Image_W100_H100_Tint_Red: {
    width: "100%",
    height: "100%",
    tintColor: "rgba(255, 0, 0, 0.65)",
  }

});