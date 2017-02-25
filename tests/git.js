#!/usr/bin/env node

'use strict'

const fs = require( 'fs' )
const GlkOte = require( 'glkote-term' )
const Git = require( '../git.js' )
const GiDispa = require( './gi_dispa.js' )

const vm = Git
const Glk = GlkOte.Glk

const options = {
	vm: vm,
	Dialog: new GlkOte.Dialog(),
	GiDispa: GiDispa,
	Glk: Glk,
	GlkOte: new GlkOte(),
}

vm.prepare( fs.readFileSync( process.argv[2] ), options )

// This will call vm.init()
Glk.init( options )