import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <Grid container sx={{ background: '#f3f3f3', padding: '10px 0px' }}>
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
          padding: '0px 15px',
          paddingLeft: '0px',
        }}>
          <Box sx={{ borderLeft: '3px solid #cccccc', paddingLeft: '30px' }}>
            <Typography variant="h6" className={styles.greyText}>Wordparrot</Typography>
            <Box sx={{ opacity: '.5' }}>
              <Typography variant="subtitle1" className={styles.greyText}>Automation & Productivity Software</Typography>
              <Typography variant="subtitle2" className={styles.greyText}>Documentation</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
