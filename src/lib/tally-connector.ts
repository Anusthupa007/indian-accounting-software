// Tally Connector - For integrating with Tally ERP 9/Prime
import axios from 'axios';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';

interface TallyConfig {
  serverUrl: string;
  port: number;
  companyName: string;
  username?: string;
  password?: string;
}

class TallyConnector {
  private config: TallyConfig;
  private parser: XMLParser;
  private builder: XMLBuilder;

  constructor(config: TallyConfig) {
    this.config = config;
    this.parser = new XMLParser();
    this.builder = new XMLBuilder({
      ignoreAttributes: false,
      format: true,
      attributeNamePrefix: "@_"
    });
  }

  // Connect to Tally
  async connect(): Promise<boolean> {
    try {
      const response = await axios.get(`http://${this.config.serverUrl}:${this.config.port}`);
      return response.status === 200;
    } catch (error) {
      console.error('Tally connection error:', error);
      return false;
    }
  }

  // Get company data
  async getCompanyData(): Promise<any> {
    const xmlRequest = `
      <ENVELOPE>
        <HEADER>
          <TALLYREQUEST>Export Data</TALLYREQUEST>
        </HEADER>
        <BODY>
          <EXPORTDATA>
            <REQUESTDESC>
              <REPORTNAME>Company</REPORTNAME>
            </REQUESTDESC>
            <REQUESTDATA>
              <TALLYMESSAGE>
                <COMPANY>
                  <NAME>${this.config.companyName}</NAME>
                </COMPANY>
              </TALLYMESSAGE>
            </REQUESTDATA>
          </EXPORTDATA>
        </BODY>
      </ENVELOPE>
    `;

    return this.sendRequest(xmlRequest);
  }

  // Import voucher (for invoices, payments, etc.)
  async importVoucher(voucherData: any): Promise<any> {
    const xmlRequest = `
      <ENVELOPE>
        <HEADER>
          <TALLYREQUEST>Import Data</TALLYREQUEST>
        </HEADER>
        <BODY>
          <IMPORTDATA>
            <REQUESTDESC>
              <REPORTNAME>Vouchers</REPORTNAME>
              <STATICVARIABLES>
                <SVCURRENTCOMPANY>${this.config.companyName}</SVCURRENTCOMPANY>
              </STATICVARIABLES>
            </REQUESTDESC>
            <REQUESTDATA>
              <TALLYMESSAGE>
                ${this.builder.build(voucherData)}
              </TALLYMESSAGE>
            </REQUESTDATA>
          </IMPORTDATA>
        </BODY>
      </ENVELOPE>
    `;

    return this.sendRequest(xmlRequest);
  }

  // Get GST reports
  async getGSTReports(period: string): Promise<any> {
    const xmlRequest = `
      <ENVELOPE>
        <HEADER>
          <TALLYREQUEST>Export Data</TALLYREQUEST>
        </HEADER>
        <BODY>
          <EXPORTDATA>
            <REQUESTDESC>
              <REPORTNAME>GST Reports</REPORTNAME>
              <STATICVARIABLES>
                <SVCURRENTCOMPANY>${this.config.companyName}</SVCURRENTCOMPANY>
                <SVFROMDATE>${period.split(' to ')[0]}</SVFROMDATE>
                <SVTODATE>${period.split(' to ')[1]}</SVTODATE>
              </STATICVARIABLES>
            </REQUESTDESC>
            <REQUESTDATA>
              <TALLYMESSAGE>
                <REPORT>
                  <NAME>GSTR-1</NAME>
                </REPORT>
              </TALLYMESSAGE>
            </REQUESTDATA>
          </EXPORTDATA>
        </BODY>
      </ENVELOPE>
    `;

    return this.sendRequest(xmlRequest);
  }

  // Get financial statements (Ind AS compliant)
  async getFinancialStatements(): Promise<any> {
    const xmlRequest = `
      <ENVELOPE>
        <HEADER>
          <TALLYREQUEST>Export Data</TALLYREQUEST>
        </HEADER>
        <BODY>
          <EXPORTDATA>
            <REQUESTDESC>
              <REPORTNAME>Balance Sheet</REPORTNAME>
              <STATICVARIABLES>
                <SVCURRENTCOMPANY>${this.config.companyName}</SVCURRENTCOMPANY>
                <SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>
              </STATICVARIABLES>
            </REQUESTDESC>
            <REQUESTDATA>
              <TALLYMESSAGE>
                <REPORT>
                  <NAME>Balance Sheet</NAME>
                  <ISINDEXED>Yes</ISINDEXED>
                </REPORT>
              </TALLYMESSAGE>
            </REQUESTDATA>
          </EXPORTDATA>
        </BODY>
      </ENVELOPE>
    `;

    return this.sendRequest(xmlRequest);
  }

  // Private method to send XML requests to Tally
  private async sendRequest(xmlRequest: string): Promise<any> {
    try {
      const response = await axios.post(
        `http://${this.config.serverUrl}:${this.config.port}`,
        xmlRequest,
        {
          headers: {
            'Content-Type': 'application/xml',
            'Accept': 'application/xml'
          }
        }
      );

      // Parse XML response
      const result = this.parser.parse(response.data);
      return result;
    } catch (error) {
      console.error('Tally request error:', error);
      throw new Error('Failed to communicate with Tally');
    }
  }

  // Generate CARO 2020 report
  async generateCAROReport(): Promise<any> {
    const xmlRequest = `
      <ENVELOPE>
        <HEADER>
          <TALLYREQUEST>Export Data</TALLYREQUEST>
        </HEADER>
        <BODY>
          <EXPORTDATA>
            <REQUESTDESC>
              <REPORTNAME>Audit Report</REPORTNAME>
              <STATICVARIABLES>
                <SVCURRENTCOMPANY>${this.config.companyName}</SVCURRENTCOMPANY>
                <SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>
              </STATICVARIABLES>
            </REQUESTDESC>
            <REQUESTDATA>
              <TALLYMESSAGE>
                <REPORT>
                  <NAME>CARO 2020 Report</NAME>
                </REPORT>
              </TALLYMESSAGE>
            </REQUESTDATA>
          </EXPORTDATA>
        </BODY>
      </ENVELOPE>
    `;

    return this.sendRequest(xmlRequest);
  }
}

export default TallyConnector;