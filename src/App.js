import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import profileImage from "./profile.jpeg"; // Import your profile image

function App() {
  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 5,
          textAlign: "center",
          position: "relative", // For positioning the avatar
        }}
      >
        {/* Profile Image */}
        <Avatar
          alt="Atul Kumar"
          src={profileImage}
          sx={{
            position: "absolute",
            top: 30, // Move the image further down
            right: 40, // Keep it aligned to the right
            width: 150, // Increase the width
            height: 150, // Increase the height
            border: "3px solid white", // Make the border a bit thicker
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Add a subtle shadow for emphasis
          }}
        />
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Atul Kumar
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Software Engineer/Competitive Programmer
        </Typography>
      </Box>

      {/* About Section */}
      {/* About Section */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hi, I'm <strong>Atul</strong>, a software developer and competitive
          programmer. I have worked on various tech stacks including Python,
          React, TypeScript, Java, and have also explored Machine Learning and
          Deep Learning during my internships at Vidal Health and UST.
        </Typography>
        <Typography variant="body1" paragraph>
          I love writing editorials and creating solution videos for complex
          problems in graph algorithms and dynamic programming. Outside of
          programming, I enjoy playing chess and trying my hand at stand-up
          comedy.
        </Typography>
      </Box>

      {/* Links Section */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          Links
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href="https://github.com/AtulKumar001"
              target="_blank"
            >
              GitHub
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              href="https://leetcode.com/karna001"
              target="_blank"
            >
              LeetCode
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              href="https://codeforces.com/profile/karna001"
              target="_blank"
            >
              Codeforces
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="info"
              fullWidth
              href="https://linkedin.com/in/atul-kumar-62b376167/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="warning"
              fullWidth
              href="https://www.youtube.com/@AtulTiwariCentralPerk/videos"
              target="_blank"
            >
              YouTube
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Featured Video Section */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          Featured Video
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Watch my YouTube video where I explain Djikstra (Graph algorithm) in
          detail.
        </Typography>
        <Box
          sx={{
            position: "relative",
            paddingTop: "56.25%", // Maintains a 16:9 aspect ratio
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/YeTzAw76gYw"
            title="Graph Algorithm Explanation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "60%",
              height: "70%",
            }}
          ></iframe>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "grey.900",
          color: "white",
          py: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">© 2024 Atul Kumar</Typography>
      </Box>
    </Container>
  );
}

export default App;
