import React from 'react';
import clsx from 'clsx';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <Grid container>
        <Grid item xs={12} md={8} lg={6} sx={{ margin: 'auto', }}>
          <Grid item xs={12} sx={{ minHeight: '400px' }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Box sx={{ 
                          padding: '5px 30px 0px 0px', 
                          maxWidth: '100px', 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          justifyContent: 'left',
                        }}>
                          <img src={'img/parrot_og_rounded.png'} />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sx={{
                        textAlign: 'left',
                        margin: '0px 0px 15px 0px',
                        padding: '0px 15px',
                        paddingLeft: '0px',
                      }}>
                        <Box sx={{ borderLeft: '3px solid #cccccc', paddingLeft: '30px' }}>
                          <Typography variant="h6">Wordparrot</Typography>
                          <Box sx={{ opacity: '.5' }}>
                            <Typography variant="subtitle1">Automation & Productivity Software</Typography>
                            <Typography variant="subtitle2">Documentation</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/docs/intro">
                      <Box sx={{ padding: '45px 15px 15px 15px', maxWidth: '400px' }}>
                        <img src={'img/technical_documentation.jpg'} style={{borderRadius: '12px'}} />
                      </Box>
                    </Link>
                  </Grid>
                </Grid>
              <Box sx={{ paddingTop: '45px', textAlign: 'center' }}>
                <Link href="/docs/intro">
                  <Button variant="outlined">Go to Documentation</Button>
                </Link>
              </Box>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
