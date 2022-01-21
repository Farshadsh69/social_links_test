import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    padding: "100px 100px ",
  },
  divBox: {
    backgroundColor: "#2f343b",
    width: 1000,
    borderRadius: 15,
    boxShadow: "0px 10px 10px 10px #060d1573",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  Account: {
    display: "flex",
    justifyContent: "start !important",
    paddingBottom: 5,
  },
  TAccount: {
    fontSize: "20px !important",
    textAlign: "left !important",
  },
  divSubAccount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 30,
  },
  tHome: {
    padding: "0px 20px 0px 0px ",
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      width: 4,
      height: 4,
      borderRadius: 10,
      backgroundColor: "#d0d0d0de",
      top: 8,
      right: 5,
    },
  },
  tUser: {
    padding: "0px 30px 0px 10px",
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      width: 4,
      height: 4,
      borderRadius: 10,
      backgroundColor: "#d0d0d0de",
      top: 8,
      right: 15,
    },
  },
  divEdit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    cursor:'pointer'
  },
  iconEdit: {
    fontSize: 14,
    margin: "0px 5px 0px 5px ",
  },
  TextEdit: {
    fontSize: 14,
    fontWeight: "bold",
  },
  divInputBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#434c56",
    borderRadius: 5,
    marginBottom: 30,
    padding: 15,
  },
  divAddList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    width: "100%",
    backgroundColor: "#434c56",
    borderRadius: 5,
    padding: 15,
  },
  Typography: {
    marginBottom: 20,
  },

  dinInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 45,
  },
  TextFieldSelect: {
    width: "32%",
    height:20,
    color: "#fff !important",
  },
  MenuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  divBtnInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "right",
    marginBottom:10,
  },
  btnOk: {
    height:30,

    margin: "0px 5px",
    boxShadow:'0px 10px 5px 0px #c0c24138'
  },
  btnCancel: {
    height:30,
    margin: "0px 5px",
    boxShadow:'0px 10px 5px 0px #a2aeba38'
  },
  divComm:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginRight:30,
  },
  iconList:{
    marginRight:10
  },
  divEmailId:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  divId:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginRight:20,
  },
  Id:{
    marginLeft:5,
    
  },
  divLink:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  Link:{
    marginLeft:5,
  }
  
}));
export default useStyles;
