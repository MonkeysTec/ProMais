import { StyleSheet } from "react-native";


export const stylesDefault = StyleSheet.create({
   ViewBody: {
    paddingHorizontal:20,
    width:'100%',
    height:'auto',
   },
   RedViewHeaderContainer:{
    backgroundColor: 'red',
    height: 120,
    width: '100%',
    paddingHorizontal: 30,
    
    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
   },
   RedViewFirstText:{
    color: 'white', 
    fontWeight: '800', 
    fontSize: 18
   },
    RedViewSecondText:{
      color: 'white', 
      fontWeight: '800', 
      marginLeft: 5, 
      fontSize: 18
    },
});