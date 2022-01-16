function get_value() {
    const rate = document.getElementById('rate').value;
    const amount = document.getElementById('amount').value;
    const dollar = amount / rate;
    document.getElementById('value').value = dollar.toFixed(2);
}