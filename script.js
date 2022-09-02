// tangkap elemen root & absensi_form
let root = document.getElementById('root');
let absensiForm = document.getElementById('absensi_form');

// buat array untuk menampung absensi data
let absensiData = [];

absensiForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let fullName = e.target.fullname.value;

  // validasi data kosong
  if (!fullName) {
    alert('silahkan masukkan nama lengkap');
    return;
  }

  // console.info(fullName);

  absensiData.push({
    namaLengkap: fullName,
    waktu: new Date().toLocaleTimeString(),
    tangggal: new Date().toLocaleDateString(),
  });

  // reset inputan
  e.target.fullname.value = '';
  // console.info(absensiData);
  renderToHTML();
});

// buat function untuk menampilkan data di
const renderToHTML = () => {
  // reset elemen div root
  root.innerHTML = '';

  // mapping array to html elemen
  absensiData.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
      <span>${i + 1} &nbsp; ${e.namaLengkap}</span> 
      <span>${e.waktu} ${e.tangggal}</span>
    </div>`;
  });
};

const handleDelete = (i) => {
  // console.info(i);
  let confDelete = confirm(`apakah anda yakin akan menghapus data ${i}`);

  if (!confDelete) {
    return;
  }
  absensiData.splice(i, 1);

  renderToHTML();
};
