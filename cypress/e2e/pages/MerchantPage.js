class MerchantPage {

  clickCatatPenjualanButton() {
    cy.get('.mantine-Stack-root > :nth-child(2)').click();
  }
  inputKTPPelanggan(KTP){
    cy.get('#mantine-ra').type(KTP)
  }
  clickLanjutkanPenjualanButton() {
    cy.get('[data-testid="btnCheckNik"]').contains('LANJUTKAN PENJUALAN').click();
  }
  clickLanjutkanTransaksiButton() {
    cy.get('button').contains('LANJUTKAN TRANSAKSI').click();
  }
  clickCheckPesananButton() {
    cy.get('[data-testid="btnCheckOrder"]').contains('CEK PESANAN').click();
  }
  clickProsesPenjualanButton() {
    cy.get('[data-testid="btnPay"]').contains('PROSES PENJUALAN').click();
  }
  chooseRumahTanggaOption(){
    cy.contains('span', 'Rumah Tangga').click(); 
  }
  verifySuccessCatatPenjualan(){
    cy.get('div').contains('LUNAS');
  }
  
  
}

export default MerchantPage;
