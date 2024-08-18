import { StyleSheet } from "react-native";

const u = StyleSheet.create({
  // Flexbox Utilities
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  spaceEvenly: {
    justifyContent: "space-evenly",
  },

  // Margin and Padding Utilities
  m0: { margin: 0 },
  m1: { margin: 4 },
  m2: { margin: 8 },
  m3: { margin: 16 },
  m4: { margin: 32 },

  p0: { padding: 0 },
  p1: { padding: 4 },
  p2: { padding: 8 },
  p3: { padding: 16 },
  p4: { padding: 32 },

  mt1: { marginTop: 4 },
  mt2: { marginTop: 8 },
  mt3: { marginTop: 16 },
  mt4: { marginTop: 32 },

  mb1: { marginBottom: 4 },
  mb2: { marginBottom: 8 },
  mb3: { marginBottom: 16 },
  mb4: { marginBottom: 32 },

  ml1: { marginLeft: 4 },
  ml2: { marginLeft: 8 },
  ml3: { marginLeft: 16 },
  ml4: { marginLeft: 32 },

  mr1: { marginRight: 4 },
  mr2: { marginRight: 8 },
  mr3: { marginRight: 16 },
  mr4: { marginRight: 32 },

  pt1: { paddingTop: 4 },
  pt2: { paddingTop: 8 },
  pt3: { paddingTop: 16 },
  pt4: { paddingTop: 32 },

  pb1: { paddingBottom: 4 },
  pb2: { paddingBottom: 8 },
  pb3: { paddingBottom: 16 },
  pb4: { paddingBottom: 32 },

  pl1: { paddingLeft: 4 },
  pl2: { paddingLeft: 8 },
  pl3: { paddingLeft: 16 },
  pl4: { paddingLeft: 32 },

  pr1: { paddingRight: 4 },
  pr2: { paddingRight: 8 },
  pr3: { paddingRight: 16 },
  pr4: { paddingRight: 32 },

  // Size Utilities
  w100: {
    width: "100%",
  },
  h100: {
    height: "100%",
  },
  w50: {
    width: "50%",
  },
  h50: {
    height: "50%",
  },
  fullScreen: {
    width: "100%",
    height: "100%",
  },
  square: {
    width: 100,
    height: 100,
  },

  // Text Utilities
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
  textBold: {
    fontWeight: "bold",
  },
  textItalic: {
    fontStyle: "italic",
  },
  textSmall: {
    fontSize: 12,
  },
  textMedium: {
    fontSize: 16,
  },
  textLarge: {
    fontSize: 24,
  },
  textPrimary: {
    color: "#007bff",
  },
  textDanger: {
    color: "#dc3545",
  },
  textSuccess: {
    color: "#28a745",
  },

  // Background and Border Utilities
  bgPrimary: {
    backgroundColor: "#007bff",
  },
  bgSecondary: {
    backgroundColor: "#6c757d",
  },
  bgSuccess: {
    backgroundColor: "#28a745",
  },
  bgDanger: {
    backgroundColor: "#dc3545",
  },
  bgWarning: {
    backgroundColor: "#ffc107",
  },
  bgInfo: {
    backgroundColor: "#17a2b8",
  },
  bgLight: {
    backgroundColor: "#f8f9fa",
  },
  bgDark: {
    backgroundColor: "#343a40",
  },

  borderPrimary: {
    borderColor: "#007bff",
  },
  borderSecondary: {
    borderColor: "#6c757d",
  },
  borderSuccess: {
    borderColor: "#28a745",
  },
  borderDanger: {
    borderColor: "#dc3545",
  },
  borderWarning: {
    borderColor: "#ffc107",
  },
  borderInfo: {
    borderColor: "#17a2b8",
  },
  borderLight: {
    borderColor: "#f8f9fa",
  },
  borderDark: {
    borderColor: "#343a40",
  },
  borderRounded: {
    borderRadius: 8,
  },
  borderCircle: {
    borderRadius: 50,
  },

  // Positioning Utilities
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  top0: {
    top: 0,
  },
  bottom0: {
    bottom: 0,
  },
  left0: {
    left: 0,
  },
  right0: {
    right: 0,
  },
  centerVertical: {
    justifyContent: "center",
  },
  centerHorizontal: {
    alignItems: "center",
  },
  zIndex1: {
    zIndex: 1,
  },
  zIndex10: {
    zIndex: 10,
  },

  // Shadow and Elevation Utilities
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  elevation1: {
    elevation: 1,
  },
  elevation5: {
    elevation: 5,
  },
  elevation10: {
    elevation: 10,
  },
});

export default u;
