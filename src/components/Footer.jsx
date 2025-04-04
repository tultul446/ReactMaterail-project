import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';

function Footer() {
  const FooterData = [
    {
      Title: "Home",
      links: ['About us', 'Careers', 'Press', 'Blog']
    },
    {
      Title: "Product",
      links: ['Features', 'Pricing', 'Docs', 'FAQ']
    },
    {
      Title: "Legals",
      links: ['Privacy Policy', 'Terms of Service', 'Disclaimer']
    },
    {
      Title: "Blogs",
      links: ['Latest Posts', 'Community', 'Guides', 'News']
    },
  ];

  const SocialIcons = [
    { icon: <Facebook />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <Instagram />, href: '#' },
  ];

  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          {/* Logo Section */}
          <Grid item xs={12} md={3}>
            <Typography>
              <img src="/logo.png.png" alt="Logo" width="150" />
            </Typography>
          </Grid>

          {/* Footer Links */}
          {FooterData.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {section.Title}
              </Typography>
              {section.links.map((link, linkIndex) => (
                <Box key={linkIndex}>
                  <Link href="#" underline="none" color="inherit" display="block" sx={{ my: 1 }}>
                    {link}
                  </Link>
                </Box>
              ))}
             
            </Grid>

          ))}
       
          {/* Social Media Icons & Copyright */}
          <Grid item xs={12} md={12} >
          <hr className='mt-10 mb-2 text-[#C4C4C4]'/>
          <Box display="flex" justifyContent="flex-end">
              {SocialIcons.map((social, index) => (
                <IconButton key={index} href={social.href} sx={{ color: 'white', ml:'36'}}>
                  {social.icon}
                </IconButton>
              ))}
            </Box>


            <Box mt={4} textAlign="center">
              <Typography variant="body2" color="gray">
                © {new Date().getFullYear()} Degic. All rights reserved.
              </Typography>
            </Box>

            
            


          </Grid>
         


        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
