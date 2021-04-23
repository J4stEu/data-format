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
            fromFormat: null,
            toFormat: null,
            fromData: null,
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
            console.log(event.target.value)
        } else {
            this.setState(() => {
                return {
                    toData: event.target.value
                }
            })
            console.log(event.target.value)
        }
    }

    format() {
        let fromFormat = this.state.fromFormat;
        let fromData = this.state.fromData;
        let toFormat = this.state.toFormat;
        let fromDataToJson;
        let toData;
        switch (fromFormat) {
            case '...':
                console.log('From format is not defined');
                alert('From format is not defined');
                break;
            case 'JSON':
                fromDataToJson = fromData;
                break;
            case 'XML':
                let options = {compact: true};
                try {
                    fromDataToJson = xml.xml2json(fromData, options);
                    //console.log(fromDataToJson);
                } catch (e) {
                    console.log(e);
                    alert(e);
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
            }
        }
        
        switch(toFormat) {
            case '...':
                console.log('To format is not defined');
                alert('To format is not defined');
                break;
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
                try {
                    let options = {ignoreDeclaration: false, compact: true};
                    if (!(fromDataToJson['declaration'] || fromDataToJson['_declaration'])) {
                        options['ignoreDeclaration'] = true;
                    }
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
            return {
                toData: toData
            }
        })
    }

    render() {
      return (
        <div className="windowsContainer">
            <div className="firstWindow">
                <textarea className="textData convFrom" placeholder={this.state.fromFormat} onChange={event => this.getData(true, event)}></textarea>
            </div>
            <div className="controlPanel">
                from
                <select className="convSelect convFromSelect" onChange={event => this.getFormat(true, event)}>
                    {optionsComponents}
                </select>
                to
                <select className="convSelect convToSelect" onChange={event => this.getFormat(false, event)}>
                    {optionsComponents}
                </select> 
                <div className="convButton" onClick={() => this.format()}>Format</div>
            </div>
            <div className="secondWindow">
                <textarea className="textData convTo" value={this.state.toData} placeholder={this.state.toFormat} onChange={event => this.getData(false, event)}></textarea>
            </div>
        </div>
      );
    }
}

export default Windows