<script type="text/javascript">
  //Password Feature by DeepNet
 function verify(){if (document.querySelector('#password').value === 'ok'){document.querySelector('.deepnetloginwrap').classList.add('hidden')}
else{alert('Password Yang Anda Masukan Salah!');password.setSelectionRange(0,password.value.length)}
return false}
  const show = () => {
  let password = document.querySelector('#password');
  let sandi = document.querySelector('.icon1');
  if (password.type === 'password') {
    password.type = 'text';
    sandi.style.color = '#f09800';
  } else {
    password.type = 'password';
    sandi.style.color = '#fff';
  }
};
</script>
