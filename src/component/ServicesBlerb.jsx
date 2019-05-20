import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../util/strings.js';
import frets from '../img/frets.jpg';
import owen from '../img/owen.jpg';


class ServicesBlerb extends Component {
  render() {
    return (
    	<div className="trans container"><hr/>
    		<h2 className="text-center">Lutherie Services</h2>
    		<hr/>
    		<p>
    			Evaluations are always free. Please feel free to come by the shop for a quote!
    		</p>
    		<div className="row">
    			<div className ="col-sm-6">
    				<img className="img-fluid border rounded" src="owen.jpg"/>
    				<h5>Owen In The Shop</h5>
    			</div>
    			<div className="col-sm-6">
    				<h4>Instrument Services</h4>
    				<ul>
    					<li><strong>Acoustic and Electric Guitar Setup</strong> - action, truss rods, intonation, etc.</li>
    					<li><strong>Pickup Installation</strong> - for electric and acoustic</li>
    					<li><strong>Fretwork</strong> - leveling, polishing, end dressing, etc.</li>
    				</ul>

    				<h4>Repairs</h4>
    				<ul>
    					<li><strong>Bridge Re-gluing</strong> - steel string, classical, 12 string</li>
    					<li><strong>Crack Repair</strong> - for cracks in soundboards, sides, backs, etc.</li>
    					<li><strong>Electronic Repair</strong> - output jacks, pots, general wiring issues, etc.</li>
    					<li><strong>Neck Resets</strong> - dovetail, bolt-on, mortise/tenons, etc.</li>
    					<li><strong>Broken Necks, Peg-heads</strong> - cracked necks, peg-heads, heel-blocks, etc.</li>
    				</ul>
    				<h4>Restorations</h4>
    				<ul>
    					<li><strong>Knowledgeable Evaluations</strong> - restore your instrument appropriately</li>
    					<li><strong>Accurate Part Replication</strong> - bridges, fingerboards, binding, rosettes, etc.</li>
    					<li><strong>Refinishing</strong> - french polishing, lacquers, touch-ups, etc.</li>
    				</ul>
    			</div>
    		</div>
    	</div>	
    );
  }

}

export default ServicesBlerb;

