import React from 'react';
import clsx from 'clsx';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <Grid container>
        <Grid item xs={12} md={8} lg={6} sx={{ margin: 'auto' }}>
          <Grid item xs={12} sx={{ minHeight: '400px' }}>
                <Grid container>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/docs/intro">
                      <Box sx={{ padding: '45px 15px 15px 15px', maxWidth: '600px' }}>
                        <img src={'img/technical_documentation.jpg'} style={{borderRadius: '12px'}} />
                      </Box>
                    </Link>
                  </Grid>
                </Grid>
              <Box sx={{ paddingTop: '45px', paddingBottom: '45px', textAlign: 'center' }}>
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
