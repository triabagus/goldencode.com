#include<iostream>
using namespace std;
int main (){
    int kode,price,jumlah,total_harga,bayar,kembalian;
    char pesan_lagi;
    do 
    {
    cout<<"               RUMAH MAKAN                "<<endl;
    cout<<"       CONTOH HASIL APLIKASI KASIR            "<<endl;
    cout<<"              by.tria bagus       "<<endl;
    cout<<"============================================"<<endl;
    cout<<""<<endl;
    cout<<"Menu Makanan        Harga"<<endl;
    cout<<"1. AYAM GORENG        Rp. 10.000"<<endl;
    cout<<"2. NASI GORENG        Rp.  8.000"<<endl;
    cout<<"3. MIE PANGSIT        Rp. 10.000"<<endl;
    cout<<"4. NASI PADANG        Rp. 12.000"<<endl;
    cout<<"5. NASI CAMPUR        Rp.  8.000"<<endl;
    cout<<"6. POP ICE            Rp.  6.000"<<endl;
    cout<<"7. AIR GELAS          Rp.    500"<<endl;
    cout<<'#'<<"MASUKKAN NOMOR MENU PILIHAN ANDA :";
    cin>>kode;
    switch (kode){
    case 1:
        cout<<'#'<<" AYAM GORENG"<<endl;
        price=10000;
        
        cout<<"Masukkan Jumlah :";
        cin>>jumlah;
            total_harga=price*jumlah;
        cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
        cout<<"DIBAYAR : Rp. ";
        cin>>bayar;
            if(bayar <= total_harga){           
            cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
            cout<<"* Uang yang dibayar kurang, masukkan lagi Pembayaran pas atau lebih: Rp. ";
            cin>>bayar;
            }

        kembalian=bayar-total_harga;
        cout<<"KEMBALI : Rp. "<<kembalian<<endl;
        cout<<"Masih ada Y/T :";
        cin>>pesan_lagi;
        
        break;
    case 2:
        cout<<'#'<<" NASI GORENG"<<endl;
            price=8000;
            
        cout<<"Masukkan Jumlah :";
        cin>>jumlah;
            total_harga=price*jumlah;
        cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
        cout<<"DIBAYAR : Rp. ";
        cin>>bayar;
            if(bayar <= total_harga){             
            cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
            cout<<"* Uang yang dibayar kurang, masukkan lagi Pembayaran pas atau lebih: Rp. ";
            cin>>bayar;
            }
            
        kembalian=bayar-total_harga;
        cout<<"KEMBALI : Rp. "<<kembalian<<endl;
        cout<<"Masih ada Y/T :";
        cin>>pesan_lagi;
        
        break;
    case 3:
        cout<<'#'<<" MIE PANGSIT"<<endl;
            price=10000;
            
        cout<<"Masukkan Jumlah :";
        cin>>jumlah;
            total_harga=price*jumlah;
        cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
        cout<<"DIBAYAR : Rp. ";
        cin>>bayar;
            if(bayar <= total_harga){             
            cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
            cout<<"* Uang yang dibayar kurang, masukkan lagi Pembayaran pas atau lebih: Rp. ";
            cin>>bayar;
            }
            
        kembalian=bayar-total_harga;
        cout<<"KEMBALI : Rp. "<<kembalian<<endl;
        cout<<"Masih ada Y/T :";
        cin>>pesan_lagi;
        
        break;
    case 4:
        cout<<'#'<<" NASI PADANG"<<endl;
            price=12000;
            
        cout<<"Masukkan Jumlah :";
        cin>>jumlah;
            total_harga=price*jumlah;
        cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
        cout<<"DIBAYAR : Rp. ";
        cin>>bayar;
            if(bayar <= total_harga){             
            cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
            cout<<"* Uang yang dibayar kurang, masukkan lagi Pembayaran pas atau lebih: Rp. ";
            cin>>bayar;
            }

        kembalian=bayar-total_harga;
        cout<<"KEMBALI : Rp. "<<kembalian<<endl;
        cout<<"Masih ada Y/T :";
        cin>>pesan_lagi;
        
        break;
    case 5:
        cout<<'#'<<" NASI CAMPUR"<<endl;
            price=8000;
            
        cout<<"Masukkan Jumlah :";
        cin>>jumlah;
            total_harga=price*jumlah;
        cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
        cout<<"DIBAYAR : Rp. ";
        cin>>bayar;
            if(bayar <= total_harga){             
            cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
            cout<<"* Uang yang dibayar kurang, masukkan lagi Pembayaran pas atau lebih: Rp. ";
            cin>>bayar;
            }
            
        kembalian=bayar-total_harga;
        cout<<"KEMBALI : Rp. "<<kembalian<<endl;
        cout<<"Masih ada Y/T :";
        cin>>pesan_lagi;
        
        break;
    case 6:
        cout<<'#'<<" JUS JERUK"<<endl;
            price=6000;
            
        cout<<"Masukkan Jumlah :";
        cin>>jumlah;
            total_harga=price*jumlah;
        cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
        cout<<"DIBAYAR : Rp. ";
        cin>>bayar;
            if(bayar <= total_harga){             
            cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
            cout<<"* Uang yang dibayar kurang, masukkan lagi Pembayaran pas atau lebih: Rp. ";
            cin>>bayar;
            }
        
        kembalian=bayar-total_harga;
        cout<<"KEMBALI : Rp. "<<kembalian<<endl;
        cout<<"Masih ada Y/T :";
        cin>>pesan_lagi;
        
        break;
    case 7:
        cout<<'#'<<" AIR GELAS"<<endl;
            price=500;
            
        cout<<"Masukkan Jumlah :";
        cin>>jumlah;
            total_harga=price*jumlah;
        cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
        cout<<"DIBAYAR : Rp. ";
        cin>>bayar;
            if(bayar <= total_harga){             
            cout<<"Total harga harganya yaitu : Rp. "<<total_harga<<endl;
            cout<<"* Uang yang dibayar kurang, masukkan lagi Pembayaran pas atau lebih: Rp. ";
            cin>>bayar;
            }
        
        kembalian=bayar-total_harga;
        cout<<"KEMBALI : Rp. "<<kembalian<<endl;
        cout<<"Masih ada Y/T :";
        cin>>pesan_lagi;
        
        break;
    default:
    cout<<"*Kode yang anda masukkan tidak ada"<<endl;
    }
    }while (pesan_lagi=='Y' || pesan_lagi=='y');
    cout<<"Terimah Kasih Atas Kunjungan Anda";
    return 0;
}