
import Logo from './Img/logo.png';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image,
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });
  
  // Create Document Component
  function Factures() {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={{ marginLeft: '20px', flexDirection: 'row', display: 'flex' }}>
            <Text style={{textAlign:'center',  width:'400px', height:'20px', marginTop:'30px',color:'beige', backgroundColor:'#c3b795'}}>Facture</Text>
            <Image src={Logo} style={{height: '100px', width: '100px', marginLeft:'40px' }} />
            </View>
            
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default Factures;