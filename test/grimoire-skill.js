/**
 * grimoire-skill
 *
 * @license MIT
 * @copyright Voxable 2016
 */

'use strict';

/*eslint-env node, mocha*/

let expect = require( 'chai' ).expect;
let Skill = require( '../' );

describe( 'Skill', function() {

  describe( 'constructor', function() {
    it( 'sets the name to the value of the first argument', function() {
      let skillName = 'sample';
      let subject = new Skill( skillName );

      expect( subject.name ).to.equal( skillName );
    } );
  } );

} );
