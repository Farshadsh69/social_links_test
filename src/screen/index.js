import React,{useState} from "react";
import useStyles from "./indexStyles";
import "./indexStyles.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WebIcon from "@mui/icons-material/Web";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import Collapse from '@mui/material/Collapse';


export default function Index() {
  const classes = useStyles();
  const [open,setOpen]=useState(false)
  const Communications = [
    {
      value: "تلگرام ",
      label: "تلگرام",
      icon: <TelegramIcon />,
    },
    {
      value: "اینستاگرام ",
      label: "اینستاگرام",
      icon: <InstagramIcon />,
    },
    {
      value: "تویتر ",
      label: "تویتر",
      icon: <TwitterIcon />,
    },
    {
      value: "فیس بوک ",
      label: "فیس بوک",
      icon: <FacebookIcon />,
    },
    {
      value: "لینکداین ",
      label: "لینکداین",
      icon: <LinkedInIcon />,
    },
    {
      value: "وب سایت ",
      label: "وب سایت",
      icon: <WebIcon />,
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.Account}>
        <Typography color="primary" className={classes.TAccount}>
          حساب کاربری
        </Typography>
      </div>
      <div className={classes.divSubAccount}>
        <Typography variant="body2" color="primary" className={classes.tHome}>
          خانه
        </Typography>
        <Typography variant="body2" color="primary" className={classes.tUser}>
          کاربر
        </Typography>
        <Typography color="primary.dark" variant="subtitle1">
          {" "}
          تنضیمات کاربری
        </Typography>
      </div>
      <div className={classes.divBox}>
        <Typography color="primary.light" variant="subtitle1">
          مسیرهای ارتباطی
        </Typography>


        <div className={classes.divEdit} onClick={()=>setOpen(!open)}>
          <EditIcon
            fontSize="small"
            color="secondary"
            className={classes.iconEdit}
          />
          <Typography color="secondary" className={classes.TextEdit}>
            ویرایش مسیر ارتباطی
          </Typography>
        </div>
        <Collapse in={open}>
        <div className={classes.divInputBox}>
          <Typography color="primary" className={classes.Typography}>
            ویرایش مسیر ارتباطی ؟
          </Typography>
          <div className={classes.dinInput}>
            <TextField
              select
              label="نوع*"
              className={classes.TextFieldSelect}
              color="secondary"
            >
              {Communications.map((item) => (
                <MenuItem
                  key={item.value}
                  value={item.value}
                  className={classes.MenuItem}
                >
                  {item.icon} {item.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.TextFieldSelect}
              color="secondary"
              placeholder="لینک"
            ></TextField>
            <TextField
              className={classes.TextFieldSelect}
              color="secondary"
              placeholder="آی دی (ID)"
            ></TextField>
          </div>
          <div className={classes.divBtnInput}>
            <Button variant="outlined" className={classes.btnCancel}>
              انصراف
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className={classes.btnOk}
            >
              تایید مسیر ارتباطی
            </Button>
          </div>
        </div>
        <div className={classes.divAddList}>
          <div className={classes.divEmailId}>
            <div className={classes.divComm}>
              <TwitterIcon color="primary" className={classes.iconList} />
              <Typography variant="body1" color="primary">
                تویتر
              </Typography>
            </div>
            <div className={classes.divId}>
              <Typography variant="subtitle1" color="primary.dark">
                آی دی (ID):
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                className={classes.Id}
              >
                Farshad69@
              </Typography>
            </div>
            <div className={classes.divLink}>
              <Typography variant="subtitle1" color="primary.dark">
                لینک :
              </Typography>
              <Typography
                variant="body2"
                color="secondary"
                className={classes.Link}
              >
                https://twitter.com/Farshad69
              </Typography>
            </div>
          </div>
          <div className={classes.divBtnDelEdit}>
            <Button color="secondary">
              {" "}
              <EditIcon color="secondary" className={classes.iconEdit} />
              ویرایش
            </Button>
            <Button color="warning">
              <DeleteForeverIcon color="warning" className={classes.iconEdit} />{" "}
              حذف
            </Button>
          </div>
        </div>
        </Collapse>

      </div>
    </div>

  );
}
