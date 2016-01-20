#!/usr/bin/env node

/**
 * grimoire-skill
 *
 * @license MIT
 * @copyright Voxable 2016
 */

'use strict';

const ghpages = require( 'gh-pages' );
const path = require( 'path' );

// Publish the generated documents to GitHub Pages
ghpages.publish( path.join( __dirname, '..', 'doc' ), function cb( err ) {
  if ( err ) {
    console.error( 'There was an error publishing the documentation!', err );
  }
} );
