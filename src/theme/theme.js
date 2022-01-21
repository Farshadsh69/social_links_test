import { createTheme } from '@mui/material/styles';
import palette from './palette';

const theme=createTheme({
palette:palette,
direction: 'rtl',
fontFamily:'IRANSans',
typography:{
    fontFamily:'IRANSans',
    h1:{

    },
    h2:{

    },
    h3:{

    },
    h4:{

    },
    h5:{

    },
    h6:{

    },
    body1:{
        fontWeight:700,
    },
    body2:{
        fontWeight:400,
    },
    
    subtitle1:{
        fontWeight:200,

    },
    subtitle2:{

    },
    button:{
        fontWeight:700,
        color:'#ffffff !important'

    },
}
})
export default theme