import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage"; 
import MerchantPage from "../../pages/MerchantPage";

const loginPage = new LoginPage();
const merchantPage = new MerchantPage();

Given("User at Merchant App", () => {
    cy.wait(5000);
  loginPage.loginViaSession();
  cy.wait(3000);
  cy.visit('/merchant/app'); 
  cy.wait(3000);
});

When("User click Catat Penjualan button", () => {
    cy.wait(1000);
    merchantPage.clickCatatPenjualanButton();
    cy.wait(800);
});

When("User input KTP Pelanggan to {string}", (Pelanggan) => {
    cy.wait(1000);
    merchantPage.inputKTPPelanggan(Pelanggan);
});

When("User click Lanjutkan Penjualan button", () => {
    merchantPage.clickLanjutkanPenjualanButton();
    cy.wait(1500); 
    cy.get('body').then(($body) => {
        if ($body.find('span:contains("Rumah Tangga")').length > 0) {
            cy.log('Opsi Kategori Muncul! Memilih Rumah Tangga...');
            merchantPage.chooseRumahTanggaOption();
            merchantPage.clickLanjutkanTransaksiButton();

        } else {
            cy.log('Opsi Kategori Tidak Muncul. Lanjut flow normal...');
            
        }
    });
});

When("User click Lanjutkan Transaksi button", () => {
    merchantPage.clickLanjutkanTransaksiButton();
});

When("User click Check Pesanan button", () => {
    cy.wait(1000);
    merchantPage.clickCheckPesananButton();
    cy.wait(1000);
});

When("User click Proses Penjualan button", () => {
    cy.wait(1000);
    merchantPage.clickProsesPenjualanButton();
    cy.wait(1000)
    cy.pause();
});

Then("User Berhasil Mencatat Penjualan", () => {
    merchantPage.verifySuccessCatatPenjualan();
});