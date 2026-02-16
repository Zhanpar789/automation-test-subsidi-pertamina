import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage"; 
import MerchantPage from "../../pages/MerchantPage";

const loginPage = new LoginPage();
const merchantPage = new MerchantPage();

Given("User at Merchant App", () => {
  // 1. Panggil sesi (Jika baru pertama kali, dia akan login UI. Jika sudah, dia langsung restore sesi)
  loginPage.loginViaSession();

  // 2. Karena sudah memiliki sesi/akses, kita bisa langsung tembak URL ke halaman dalam
  // Sesuaikan URL di bawah ini dengan URL asli dashboard/halaman utamanya
  cy.visit('/merchant/app'); 
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

    // 1. Beri waktu sejenak agar sistem web merespons dan memunculkan pop-up (jika ada)
    cy.wait(1500); 

    // 2. Cek isi seluruh halaman (body) secara aman tanpa memicu error Cypress
    cy.get('body').then(($body) => {
        // Cek apakah di dalam body ada teks 'Rumah Tangga'
        if ($body.find('span:contains("Rumah Tangga")').length > 0) {
            
            // --- KONDISI 1: JIKA ADA OPSI RUMAH TANGGA ---
            cy.log('Opsi Kategori Muncul! Memilih Rumah Tangga...');
            merchantPage.chooseRumahTanggaOption();
            merchantPage.clickLanjutkanTransaksiButton();

        } else {

            // --- KONDISI 2: JIKA TIDAK ADA OPSI RUMAH TANGGA ---
            // Jangan lakukan apa-apa, Cypress akan otomatis lanjut ke step berikutnya (Cek Pesanan)
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