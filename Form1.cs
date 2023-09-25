using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Collections.Specialized;

namespace helloworldremix
{
    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
            videoBox.uiMode = "none";
        }

        private void play_Click(object sender, EventArgs e)
        {
            string videoPath = @"C:\Users\scruf\Downloads\groove battle.mp4";
            videoBox.URL = videoPath;
            
            videoBox.Ctlcontrols.play();
            videoBox.uiMode = "none";
            
        }

        private void Stop_Click(object sender, EventArgs e)
        {
            videoBox.Ctlcontrols.stop();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close(); 

        }
    }
}
