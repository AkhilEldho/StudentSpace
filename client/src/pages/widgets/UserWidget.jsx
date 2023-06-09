import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
    InstallMobile,
    LaptopChromebook,
    Airplay,
    Storage,
    Dataset,
    Palette
  } from "@mui/icons-material";
  import MenuIcon from '@mui/icons-material/Menu';
  import { Box, Typography, Divider, useTheme, IconButton } from "@mui/material";
  import { useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import UserImage from "../../components/UserImage.jsx";
  import FlexBetween from "../../components/FlexBetween.jsx";
  import WidgetWrapper from "../../components/WidgetWrapper.jsx";
  
  //Creating controller for user widget on left panel
  const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const theme = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);

    const dark = theme.palette.neutral.dark;
    const main = theme.palette.primary.main;
  
    const getUser = async () => {
      const response = await fetch(`http://localhost:8800/users/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data);
    };
  
    useEffect(() => {
      getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    if (!user) {
      return null;
    }
  
    const {
      firstName,
      lastName,
      location,
      occupation,
      friends,
    } = user;
  
    return (
      <WidgetWrapper>
        {/* FIRST ROW - User Info */}
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
        >
          <FlexBetween gap="1rem">
            <UserImage image={picturePath} />
            <Box>
              <Typography
                onClick={() => navigate(`/profile/${userId}`)}
                variant="h4"
                fontWeight="500"
                sx={{
                  color:dark,
                  "&:hover": {
                    color:main,
                    cursor: "pointer",
                  },
                }}
              >
                {firstName} {lastName}
              </Typography>
              <Typography color={dark}>{friends.length} Friends</Typography>
            </Box>
          </FlexBetween>
          <IconButton>
            <ManageAccountsOutlined sx={{color:palette.primary.main}} />
          </IconButton>
        </FlexBetween>
  
        <Divider />
  
        {/* SECOND ROW - User location and profession */}
        <Box p="1rem 0">
          <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
            <LocationOnOutlined fontSize="large" sx={{ color: main }} />
            <Typography color={dark}>{location}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="1rem">
            <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
            <Typography color={dark}>{occupation}</Typography>
          </Box>
        </Box>
  
        <Divider />
    
        {/* THIRD ROW - Social Profile connection */}
        <Box p="1rem 0">
          <Typography fontSize="1rem" color={dark} fontWeight="500" mb="1rem">
            Social Profiles
          </Typography>
  
          <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
              <img src="../assets/twitter.png" alt="twitter" />
              <Box>
                <Typography color={dark} fontWeight="500" sx={{
                    "&:hover": {
                      color: main,
                      cursor: "pointer",
                    },
                  }}>
                  Twitter.com/{user.firstName}
                </Typography>
              </Box>
            </FlexBetween>
            <IconButton>
              <EditOutlined sx={{color:palette.primary.main}} />
            </IconButton>
          </FlexBetween>
  
          <FlexBetween gap="1rem">
            <FlexBetween gap="1rem">
              <img src="../assets/linkedin.png" alt="linkedin" />
              <Box>
                <Typography color={dark} fontWeight="500" sx={{
                  "&:hover": {
                    color: main,
                    cursor: "pointer",
                  },
                }}>
                  Linkedin.com/{user.firstName + user.lastName}
                </Typography>
              </Box>
            </FlexBetween>
            <IconButton>
              <EditOutlined sx={{color:palette.primary.main}} />
            </IconButton>
          </FlexBetween>
        </Box>

        <Divider />
  
          {/* course ROW */}
          <Box p="1rem 0">

          <FlexBetween>
            <FlexBetween>
              <Typography fontSize="1rem" color={{dark}} fontWeight="500">
                Courses | Semester 1 | 2023
              </Typography>
            </FlexBetween>
            <IconButton>
            <MenuIcon sx={{color:palette.primary.main}}/>
            </IconButton>
          </FlexBetween>
  
          <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
              <Box gap="1rem" marginLeft={2}>
                <Typography color={dark} fontWeight="500" sx={{
                    "&:hover": {
                      color: main,
                      cursor: "pointer",
                    },
                  }}>
                  Hot Topics
                </Typography>
              </Box>
            </FlexBetween>
            <IconButton>
              <InstallMobile sx={{color:palette.primary.main}} />
            </IconButton>
          </FlexBetween>
  
          <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
              <Box gap="1rem" marginLeft={2}>
                <Typography color={dark} fontWeight="500" sx={{
                    "&:hover": {
                      color: main,
                      cursor: "pointer",
                    },
                  }}>
                  Cloud Computing
                </Typography>
              </Box>
            </FlexBetween>
            <IconButton>
              <LaptopChromebook sx={{color:palette.primary.main}}/>
            </IconButton>
          </FlexBetween>


          <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
              <Box gap="1rem" marginLeft={2}>
                <Typography color={dark} fontWeight="500" sx={{
                    "&:hover": {
                      color: main,
                      cursor: "pointer",
                    },
                  }}>
                  Database & Moblie Development
                </Typography>
              </Box>
            </FlexBetween>
            <IconButton>
              <Dataset sx={{color:palette.primary.main}} />
            </IconButton>
          </FlexBetween>


          <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
              <Box gap="1rem" marginLeft={2}>
                <Typography color={dark} fontWeight="500" sx={{
                    "&:hover": {
                      color: main,
                      cursor: "pointer",
                    },
                  }}>
                  Software Development
                </Typography>
              </Box>
            </FlexBetween>
            <IconButton>
              <Airplay sx={{color:palette.primary.main}} />
            </IconButton>
          </FlexBetween>

        </Box>
      </WidgetWrapper>
    );
  };
  
  export default UserWidget;
  