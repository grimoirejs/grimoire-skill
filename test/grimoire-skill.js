/**
 * grimoire-skill
 *
 * @license MIT
 * @copyright Voxable 2016
 */

'use strict';

let expect = require( 'chai' ).expect;
let grimoire = require( '../' );

describe( 'grimoire', function() {

  describe( 'constructor', function() {
    let skillName = 'sample';
    let subject = grimoire( skillName );

    it( 'sets the invocation name to the value of the first argument', function() {
      expect( subject.invocationName ).to.equal( skillName );
    } );
  } );

  describe( '#invocationName', function() {
    let skillName = 'sample';
    let subject = grimoire();

    it( 'gets and sets the value of the invocation name', function() {
      subject.invocationName = skillName;
      expect( subject.invocationName ).to.equal( skillName );
    } );
  } );

  describe( '#name', function() {
    let skillName = 'sample';
    let subject = grimoire();

    it( 'gets and sets the value of the invocation name', function() {
      subject.name = skillName;
      expect( subject.name ).to.equal( skillName );
    } );
  } );
} );
