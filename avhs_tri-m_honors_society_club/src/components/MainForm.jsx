const { JFrame, JLabel, JTextField, JTextArea, JScrollPane, JButton, JPanel, BorderLayout, GridLayout, WindowConstants } = require('java-swing');

class MainForm extends JFrame {
  constructor() {
    super();
    this.initialize();
  }

  initialize() {
    const name = new JLabel("Name*:");
    const tfname = new JTextField();
    const instrument = new JLabel("Instrument(s)*: ");
    const tfinstrument = new JTextField();
    const genre = new JLabel("Genre(s)*: ");
    const tfgenre = new JTextField();
    const number = new JLabel("Phone Number*: ");
    const tfnumber = new JTextField();
    const date = new JLabel("Dates Available*: ");
    const tfdate = new JTextField();
    const level = new JLabel("Experience*(1-4): ");
    const tflevel = new JTextField();
    const comment = new JLabel("Comments: ");
    const tfcomment = new JTextField();
    const addbtn = new JButton("Add information");
    const initializebtn = new JButton("Initialize");

    addbtn.addActionListener((e) => {
      this.addPerformer();
    });

    initializebtn.addActionListener((e) => {
      this.initializeFields();
    });

    const jpForm = new JPanel();
    jpForm.setLayout(new GridLayout(5, 2, 10, 5));
    jpForm.add(name);
    jpForm.add(tfname);
    jpForm.add(instrument);
    jpForm.add(tfinstrument);
    jpForm.add(genre);
    jpForm.add(tfgenre);
    jpForm.add(number);
    jpForm.add(tfnumber);
    jpForm.add(date);
    jpForm.add(tfdate);`  `
    jpForm.add(level);
    jpForm.add(tflevel);
    jpForm.add(comment);
    jpForm.add(tfcomment);
    jpForm.add(addbtn);
    jpForm.add(initializebtn);

    const result = new JTextArea();
    result.setEditable(false);
    const resultScroll = new JScrollPane(result);

    const clear = new JButton("Clear");

    clear.addActionListener((e) => {
      this.clearTextArea();
    });

    const jpMainPanel = new JPanel();
    jpMainPanel.setLayout(new BorderLayout(10, 10));
    jpMainPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
    jpMainPanel.add(jpForm, BorderLayout.NORTH);
    jpMainPanel.add(resultScroll, BorderLayout.CENTER);
    jpMainPanel.add(clear, BorderLayout.SOUTH);
    this.add(jpMainPanel);

    this.setSize(900, 600);
    this.setMinimumSize(new Dimension(450, 300));
    this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
    this.setVisible(true);
  }

  addPerformer() {
    const strName = tfname.getText();
    const strInst = tfinstrument.getText();
    const strGenre = tfgenre.getText();
    const strNum = tfnumber.getText();
    const strDate = tfdate.getText();
    const strLvl = tflevel.getText();
    const strComment = tfcomment.getText();

    if (strName.isEmpty() || strInst.isEmpty() || strNum.isEmpty() || strGenre.isEmpty() || strDate.isEmpty() || strLvl.isEmpty()) {
      JOptionPane.showMessageDialog(this, "Please fill out the required fields");
      return;
    }

    const txt = "Name: " + strName + " - " + "Instrument: " + strInst + " - " + "Genre(s): " + strGenre + " - " + "Phone Number: " + strNum + " - " + "Date(s) Available: " + strDate + " - " + "Experience: " + strLvl + " - " + strComment;

    result.append(txt + "\n");
    tfname.setText("");
    tfinstrument.setText("");
    tfgenre.setText("");
    tfnumber.setText("");
    tfdate.setText("");
    tflevel.setText("");
    tfcomment.setText("");
  }

  initializeFields() {
    tfname.setText("");
    tfinstrument.setText("");
    tfgenre.setText("");
    tfnumber.setText("");
    tfdate.setText("");
    tflevel.setText("");
    tfcomment.setText("");
  }

  clearTextArea() {
    result.setText("");
  }
}

const mainForm = new MainForm();

export default MainForm