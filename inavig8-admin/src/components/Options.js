import React from 'react'
import Export from './Export'
import './Options.css'
import { Button } from 'react-bootstrap'

class Options extends React.Component {

    render() {

        return(
            <main className="options-container">

                {/* <section className="load-area">
                    <h4>Upload</h4>
                    <p>Load in objects to a location without the hassle!</p>
                    <p>What format does my file need to be?</p>
                    <ul>
                        <li>JSON (Java-Script Object Notation) or</li>
                        <li>CSV (command delimited)</li>
                    </ul>
                    <div className="btn-area">
                        <Button variant="outline-primary" size="lg" href="#/" block>Upload</Button>
                    </div>
                </section> */}

                <section className="backup-area">
                    <h4>Backup</h4>
                    <p>What will be included in my backup?</p>
                    <ul>
                        <li>Locations</li>
                        <li>Objects associated with the locations</li>
                    </ul>
                    <p>What format will my backup be in?</p>
                    <ul>
                        <li>JSON (Java-Script Object Notation) or</li>
                        {/* <li>CSV (command delimited)</li> */}
                    </ul>
                    <Export />
                </section>

                {/* <section className="recovery-area">
                    <h4>Recovery</h4>
                    <p>Revert location and associated objects</p>
                    <p>What format does my file need to be?</p>
                    <ul>
                        <li>JSON (Java-Script Object Notation) or</li>
                        <li>CSV (command delimited)</li>
                    </ul>
                    <div className="btn-area">
                        <Button variant="outline-primary" size="lg" href="#/" block>Import</Button>
                    </div>
                </section> */}
            </main>
        );

    }

}

export default Options;