import * as React from 'react';
import styles from './SampleBarcode.module.scss';
import { ISampleBarcodeProps } from './ISampleBarcodeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as Barcode from "react-barcode";

export default class SampleBarcode extends React.Component<ISampleBarcodeProps, {}> {
  public render(): React.ReactElement<ISampleBarcodeProps> {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <div className={styles.sampleBarcode}>
        <div className={styles.container}>
          <div className={styles.row}>
            {numbers.map((val) => {
              return (<div className={styles.column}><Barcode value={val} ></Barcode></div>);
            })}
          </div>
        </div>
      </div>
    );
  }
}
