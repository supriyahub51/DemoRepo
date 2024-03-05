import { LightningElement } from 'lwc';
import Half_Face from '@salesforce/resourceUrl/Half_Face';
import Full_Face from '@salesforce/resourceUrl/Full_Face';
import Child from '@salesforce/resourceUrl/Child';

export default class Helmets extends LightningElement {

    fullFace=Full_Face;
    halfFace=Half_Face;
    child=Child;

 value = '';

    get optionsHelmet() {
        return [
            { label: 'Full Face Helmet', value: 'fullFace' },
            { label: 'Half Face Helmet', value: 'halfFece' },
            { label: 'Child Helmet', value: 'childHelmet' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

}