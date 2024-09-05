/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import quicksandMedium from "@/assets/fonts/Quicksand-Medium.ttf";
Font.register({
  family: "Quicksand-Medium",
  src: quicksandMedium,
});

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f4f4f4",
    fontFamily: "Quicksand-Medium",
    padding: 20,
  },
  header: {
    fontSize: 24 - 4,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 15 - 5,
    borderBottom: "1 solid #ddd",
    paddingBottom: 10,
  },
  label: {
    fontSize: 14 - 4,
    marginBottom: 5 - 5,
    color: "#555",
    fontWeight: "bold",
  },
  text: {
    fontFamily: "Quicksand-Medium",
    fontSize: 16 - 4,
    marginBottom: 5 - 5,
    color: "#333",
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "33.33%",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 12,
    color: "#999",
    borderTop: "1 solid #ddd",
    paddingTop: 10,
  },
  companyInfo: {
    fontSize: 12,
    textAlign: "left",
  },
  clientInfo: {
    marginVertical: 10,
    fontSize: 10,
    color: "#555",
  },
});

// Create Document Component
const TicketComponent = ({ accommodation }: { accommodation: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        {/* <Image style={styles.logo} src={logo} /> */}
        <Text style={styles.companyInfo}>
          INHILLS TECHNOLOGY LTD{"\n"}
          TIN: 10327799{"\n"}
          Address: 1 IN 59 Street 11{"\n"}
          Email: info@inhillstech.com{"\n"}
          Phone: +250783693700
        </Text>
      </View>

      {/* Client Information */}
      <Text style={styles.clientInfo}>
        CLIENT: KIGALI BUSINESS LTD{"\n"}
        CLIENT TIN: 10105255
      </Text>
      <Text style={styles.header}>Reservation Booking Invoice</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Reservation Type:</Text>
        <Text style={styles.text}>{accommodation?.type}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Guest Name:</Text>
        <Text style={styles.text}>John Doe</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Check-in Date:</Text>
        <Text style={styles.text}>August 28, 2024</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Check-out Date:</Text>
        <Text style={styles.text}>August 30, 2024</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Room Type:</Text>
        <Text style={styles.text}>Deluxe Suite</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Booking ID:</Text>
        <Text style={styles.text}>ABC123456</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Total Amount:</Text>
        <Text style={styles.text}>$450</Text>
      </View>
      <Text style={styles.footer}>Thank you for choosing our service!</Text>
    </Page>
  </Document>
);

const TicketViewer = ({ accommodation }: { accommodation: any }) => {
  return (
    <div className="w-full h-[500px]">
      <PDFViewer className="w-full h-full">
        <TicketComponent accommodation={accommodation} />
      </PDFViewer>
    </div>
  );
};

export default TicketViewer;
