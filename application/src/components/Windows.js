import React from 'react';
import Option from './Option';
import Formats from '../data/Data'

const optionsComponents = Formats.map(format => <Option key={format.id} format={format.format} />)
let yaml = require("js-yaml");
let xml = require('xml-js');

class Windows extends React.Component {
    constructor() {
        super()
        this.state = {
            formats: Formats,
            fromFormat: "...",
            toFormat: "...",
            fromData: "",
            toData: "",
        }
        this.getFormat = this.getFormat.bind(this)
        this.getData = this.getData.bind(this)
        this.format = this.format.bind(this)
    }

    getFormat(value, event) {
        if (value) {
            this.setState(() => {
                return {
                    fromFormat: event.target.options[event.target.selectedIndex].text
                }
            })
        } else {
            this.setState(() => {
                return {
                    toFormat: event.target.options[event.target.selectedIndex].text
                }
            })
        }
    }

    getData(value, event) {
        if (value) {
            this.setState(() => {
                return {
                    fromData: event.target.value
                }
            })
            console.log("fromData:" + event.target.value)
        } else {
            this.setState(() => {
                return {
                    toData: event.target.value
                }
            })
            console.log("toData:" + event.target.value)
        }
    }

    format(side) {
        let fromFormat = this.state.fromFormat;
        let fromData = this.state.fromData;
        let toFormat = this.state.toFormat;
        let fromDataToJson;
        let toData;
        if (!side) {
            //alert(side)
            fromFormat = this.state.toFormat;
            fromData = this.state.toData;
            toFormat = this.state.fromFormat;
        }
        switch (fromFormat) {
            case '...':
                console.log('From format is not defined');
                alert('From format is not defined');
                return;
            case 'JSON':
                fromDataToJson = fromData;
                break;
            case 'XML':
                let options = {ignoreDeclaration: false, compact: true};
                try {
                    fromDataToJson = xml.xml2json(fromData, options);
                    console.log(fromDataToJson);
                } catch (e) {
                    //console.log(`<root>${fromData}</root>`);
                    try {
                        fromDataToJson = xml.xml2json(`<root>${fromData}</root>`, options);
                    }
                    catch (e2) {
                        console.log(e);
                        alert(e);

                        console.log(e2);
                        alert(e2);
                    }
                }
                break;
            case 'YAML':
                try {
                    fromDataToJson = yaml.load(fromData);
                    //console.log(fromDataToJson);
                } catch (e) {
                    console.log(e);
                    alert(e);
                }
                break;
            default:
                console.log('Something is wrong');
                alert('Something is wrong...');
        }

        if (typeof fromDataToJson != 'object') {
            try {
                fromDataToJson = JSON.parse(fromDataToJson);
                console.log(fromDataToJson);
            } catch (e) {
                console.log(e);
                alert(e);
                return;
            }
        }
        
        switch(toFormat) {
            case '...':
                console.log('To format is not defined');
                alert('To format is not defined');
                return;
            case 'JSON':
                try {
                    toData = JSON.stringify(fromDataToJson);
                    //console.log(toData);
                } catch (e) {
                    console.log(e);
                    alert(e);
                }
                break;
            case 'XML':
                let options = {ignoreDeclaration: false, compact: true};
                if (!(fromDataToJson['declaration'] || fromDataToJson['_declaration'])) {
                    options['ignoreDeclaration'] = true;
                }
                try {
                    toData = xml.js2xml(fromDataToJson, options);
                } catch (e) {
                    console.log(e);
                    alert(e);
                }
                break;
            case 'YAML':
                try {
                    toData = yaml.dump(fromDataToJson);
                    //console.log(toData);
                } catch (e) {
                    console.log(e);
                    alert(e);
                }
              break;
            default:
                console.log('Something is wrong');
                alert('Something is wrong...');
        }
        this.setState(() => {
            if (!side) {
                return {
                    fromData: toData
                }
            }
            return {
                toData: toData
            }
        })
    }

    render() {
      return (
        <div className="windowsContainer">
            <div className="firstWindow">
                <textarea className="textData convFrom" value={this.state.fromData} placeholder={this.state.fromFormat} onChange={event => this.getData(true, event)}></textarea>
            </div>
            <div className="controlPanel">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
                <select className="convSelect convFromSelect" onChange={event => this.getFormat(true, event)}>
                    {optionsComponents}
                </select>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                <select className="convSelect convToSelect" onChange={event => this.getFormat(false, event)}>
                    {optionsComponents}
                </select> 
                <div className="convButtons">
                    <div className="convButton rightConvButton" onClick={() => this.format(false)}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
                        Convert
                    </div>
                    <div className="convButton leftConvButton" onClick={() => this.format(true)}>
                        Convert
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                    </div>
                </div>
            </div>
            <div className="secondWindow">
                <textarea className="textData convTo" value={this.state.toData} placeholder={this.state.toFormat} onChange={event => this.getData(false, event)}></textarea>
            </div>
        </div>
      );
    }
}

export default Windows