import type { PlasmoCSConfig } from "plasmo"
import React from "react";

export default function DeltaFlyerPage() {
  return (
	<body>
	<script>
	function apply(){
		window.applyM = "some test message"
		}
	</script>
    <div
      >
      		<header id="header">
			<div id="logo"
			style={{
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100px', 
			overflow: 'hidden', /* Disables scrollbars on the header frame. To enable scrollbars, change "hidden" to "scroll" */
			background: "#BCCE98"
			}}
			>
				<h1>Paycheck Perspective</h1>
			</div>
		</header>
				
		<main>
			<div
			/*
			style={{
			margin: 0,
			padding: 0,
			//overflow: 'hidden',
			height: '100%', 
			maxHeight: '100%', 
			fontFamily: 'Sans-serif',
			lineHeight: '1.5em'
			}}
			*/
			>
				
				<h1>Job Searching is hard!</h1>
				<p>Applying for jobs seems to be unnecessarily difficult. With every business trying to market themselves to you, 
                    it can be hard to know what a job will really be like and how best to market yourself.
                </p>
				
			</div>
		</main>

		<nav id="nav"
		style={{
			position: 'absolute',
			top: '100px',
			left: 0,
			bottom: 0,
			width: '230px',
			//overflow: 'auto', /* Scrollbars will appear on this frame only when there's enough content to require scrolling. To disable scrollbars, change to "hidden", or use "scroll" to enable permanent scrollbars */
			background: "#DAE9BC" 
		}}
		>
			<div class="innertube">
                <br />
                
				<h1>Other helpful tools:</h1>
				<ul>
					<li><a href="#">Resume Building</a></li>
                    <br />
                    <br />
					<li><a href="#">What Am I Worth?</a></li>
                    <br />
                    <br />
					<li><a href="#"></a></li>
					<li> {window.applyM} </li>

				</ul>
			</div>
		</nav>
    </div>
    </body>
  )
}