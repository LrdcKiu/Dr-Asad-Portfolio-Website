import Image_1 from "../assets/Rectangle 3.png";
import Image_2 from "../assets/Rectangle 2.png";
import Publication from "../component/Publication";
import React, { useState } from "react";

import "../styles/research.css";
function Research() {
  const [{ openPop, disableScroll }, setPopupState] = useState({
    openPop: false,
    disableScroll: false,
  });
  disableScroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
  return (
    <div className="r-and-p" id="r-and-p">
      <div
        className="learn-more-popup"
        style={openPop ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <div className="popup">
          <h1>Publication</h1>
          <p>
            Asad Ullah, Guoquan Liu, Hao Wang, Matiullah Khan, D. F. Khan,
            Junhua Luan., Optimal approach of three dimensional microstructure
            reconstructions and visualizations. Materials express, 3(2013)
            109-118. (I.F: 2.26, SCI)
          </p>
          <br />
          <hr />
          <p>
            Asad Ullah, Liu Guoquan, Wang Hao, Matiullah Khan, Dil Faraz Khan,
            M. Zubair Iqbal. Neighborhood topological effect on grain
            topology-size relationship in three-dimensional polycrystalline
            microstructures. Science Bulletin (formerly Chinese Science
            Bulletin), 58(2013) 3704-3708. (I.F: 9.511, SCI)
          </p>
          <br />
          <hr />
          <p>
            Asad Ullah, Guoquan Liu, Junhua Luan, Hao Wang, Wenwen Li, Mujeeb ur
            Rahman, Murad Ali. Three-dimensional visualization and quantitative
            characterization of grains in polycrystalline iron. Materials
            Characterization, 91 (2014) 65-75. (I.F: 3.22, SCI)
          </p>
          <br />
          <hr />
          <p>
            Asadullah, Guoquan Liu, Hao Wang, Juhhua Luan, Sabit Rahim,
            Matiullah Khan. A survey of the development of von Neumann relation
            from 2D to 3D. Proceedings of the 13th International Congress for
            Stereology (ICS-13), Beijing, China, October 19-23, 2011
          </p>
          <br />
          <hr />
          <p>
            Hao Wang, Guoquan Liu, Asad Ullah, and Junhua Luan. Topological
            correlations of three-dimensional grains. Appl. Phys. Lett.
            101(2012) 041910. (I.F: 3.521, SCI)
          </p>
          <br />
          <hr />
          <p>
            Wenwen Li, Guoquan Liu, Hao Wang, Hao Zhang, Junhua Luan, Asad
            Ullah. Topological correlations of grain faces in polycrystal with
            experimental verification. EPL 104(2013) 56006. (I.F: 2.269, SCI)
          </p>
          <br />
          <hr />
          <p>
            J. H. Luan, G. Q. Liu, H. Wang and A. Ullah. A note on grain
            topology-size relationship of three-dimensional polycrystalline
            microstructures. EPL, 99 (2012) 28001. (I.F: 2.269, SCI)
          </p>
          <br />
          <hr />
          <p>
            J. Luan, G. Liu, H. Wang, A. Ullah. On the sampling of
            three-dimensional polycrystalline microstructures for distribution
            determination. Journal of Microscopy, 244(2011) 214-222. (I.F: 2.15,
            SCI)
          </p>
          <br />
          <hr />
          <p>
            Junhua Luan, Guoquan Liu, Hao Wang, Asad Ullah. How to select the
            section thickness in 3D reconstruction and quantitative
            characterization of polycrystalline microstructures? Proceedings of
            the 13th International Congress for Stereology (ICS-13), Beijing,
            China, October 19-23, 2011.
          </p>
          <br />
          <hr />
          <p>
            X. Xiao, G. Q. Liu, B.F. Hu, X. Zheng, L. N. Wang, S.J. Chen, A.
            Ullah. A comparative study on Arrhenius-type constitutive equations
            and artificial neural network model to predict high-temperature
            deformation behavior in 12Cr3WV steel. Computational Materials
            Science, 62 (2012) 227-234. (I.F: 2.644, SCI)
          </p>
          <br />
          <hr />
          <p>
            M. Zubair Iqbal, Fengping Wang, Rafiud-Din, M. Yasir Rafique,
            Qurat-ul-ain Javed, Asad Ullah, Hongmei Qiu. Synthesis of novel
            clinopinacoid structure of stannous oxide and hydrogen absorption
            characteristics. Materials Letters, 78(2012) 50-53. (I.F: 3.019,
            SCI)
          </p>
          <br />
          <hr />
          <p>
            Matiullah Khan, Wenbin Cao, Ning Chen, Asadullah, M. Zubair Iqbal.
            Ab-initio calculations of synergistic chromium -nitrogen codoping
            effects on the electronic and optical properties of anatase TiO2.
            Vacuum, 92(2013) 32-38. (I.F: 2.515, SCI)
          </p>
          <br />
          <hr />
          <p>
            Xiao X, Liu G Q, Hu B F, Wang J, Asad Ullah.Effect of V and Ta on
            the precipitation behavior of 12%Cr reduced activation
            ferrite/martensite steel. Materials characterization, 82(2013)
            130-139. (I.F: 3.22, SCI)
          </p>
          <br />
          <hr />
          <p>
            Matiullah Khan, Junna Xu, Ning Chen, Wenbin Cao, Asadullah, Zahid
            Usman & D. F. Khan. Effect of Ag doping concentration on the
            electronic and optical properties of anatase TiO2: a DFT-based
            theoretical study. Res Chem Intermed, 39 (2013) 1633-1644. (I.F:
            2.064, SCI)
          </p>
          <br />
          <hr />
          <p>
            Dil Faraz Khan, Haiqing Yin, Matiullah, Asadullah and Xuanhui
            Qu.Analysis of Density and Mechanical Properties of Iron Powder with
            Upper Relaxation Assist through High Velocity Compaction. Materials
            Science Forum, 749(2013) 41-46 , (EI)
          </p>
          <br />
          <hr />
          <p>
            Matiullah Khan, Jing Li, Wenbin Cao, Asad Ullah. Advancement in the
            Photocatalytic properties of TiO2 by Vanadium and Yttrium codoping:
            Effect of Impurity concentration on the Photocatalytic Activity.
            Separation and Purification Technology, 130 (2014) 15-18 (I.F:
            5.107, SCI)
          </p>
          <br />
          <hr />
          <p>
            Khan DF, Yin H, Li H, Abideen Z, Asadullah, Qu X, et al. Effect of
            impact force on Ti-10 Mo alloy powder compaction by high velocity
            compaction technique. Materials & Design, 54(2014) 149-153. (I.F:
            5.770, SCI)
          </p>
          <br />
          <hr />
          <p>
            Murad Ali Khaskheli, Ping Wu, Amir Mahmood Soomro, Matiullah Khan,
            Mujetaba Ellahi, Asadullah, Mohammad Siddique Kalhoro. Fabrication
            and Electrical characteristic of quaternary ultrathin HfTiErO thin
            films for MOS devices grown by RF sputtering. Chemistry and
            Materials Research 5 (2013) 41- 47.
          </p>
          <br />
          <hr />
          <p>
            Sabit Rahim, Sun Tie, Afsana Begum, Asadullah. Teaching "The outline
            of China" course to foreign students using Moodle. Education and
            educational technology. AISC 108 (2011) 229-236. , (EI)
          </p>
          <br />
          <hr />
          <p>
            Murad Ali Khaskheli, Ping Wu, Mohammad Siddique Kalhoro, Nizamani
            Mujetaba Ellahi, Matiullah Khan, Asadullah, Zubair Iqbal, Dil Faraz
            Khan, Yasir Rafique. Electrical and Photonics Characteristics of
            Hftiero Thin Films Deposited at 673 K Substrate Temperature. Sindh
            Univ. Res. Jour. (Sci. Ser.), 45(2013) 317-320. , (HEC recognized
            journal under category "Y")
          </p>
          <br />
          <hr />
          <p>
            Wenwen Li, Guoquan Liu, Hao Wang, Junhua Luan, Asad Ullah. Study of
            the metric and topology properties of 3D grain face. Proceedings of
            the 13th China Congress for Stereology and Image analysis, September
            23-26, 2013, China, 229-233.
          </p>
          <br />
          <hr />
          <p>
            Wenwen Li, Guoquan Liu, Hao Wang, Junhua Luan, Asad Ullah.
            Evaluation of Topology Dependent Grain Growth Equations using
            Experimental Data and MacPherson-Srolovitz Equation. Proceedings of
            The 13th China Congress for Stereology and Image analysis, September
            23-26, 2013, China, 223-228.
          </p>
          <br />
          <hr />
          <p>
            Ehtisham Karim, Safdar Hussain, Asad Ullah, Fazal Haq, Mujeebur
            Rahman, Muhammad Saleem Khan. Numerical Solution of Cubic and
            Modified Cubic Boussinesq Equation Using Homotopy Analysis Method.
            World applied sciences journal. 32 (2014): 650-654. (I.F: 0.23, SCI)
          </p>
          <br />
          <hr />
          <p>
            Asad Ullah. Study of the evolution of grain structures via 3D
            reconstruction, Monte Carlo simulation and Mathematical modeling
            techniques. 2013, Doctoral dissertation, University of Science and
            Technology Beijing, .
          </p>
          <br />
          <hr />
          <p>
            Asad Ullah, Guoquan Liu, Hao Wang, Dil Faraz Khan, Matiullah Khan. A
            framework for image processing, analysis and visualization of
            materials microstructures using ImageJ package. Chinese Journal of
            Stereology and image analysis, 17(2012) 301-312.
          </p>
          <br />
          <hr />
          <p>
            Asad Ullah, Three-dimensional reconstruction and visualization of
            snow microstructures: An efficient digital image processing and
            segmentation based technique. Proceedings of the International
            Conference on Mountains and Climate Change, September 17-19, 2015,
            Gilgit Pakistan, page 51.
          </p>
          <br />
          <hr />
          <p>
            Matiullah Khan, Zeng Yi, Fawad, Wazir Muhammad, Abdul Niaz, Muhammad
            Iqbal Zaman, Asad Ullah. Enhancing the photoactivity of TiO2 by
            codoping with silver and molybdenum: the effect of dopant
            concentration on the photoelectrochemical properties. Mater. Res.
            Express, 4 (2017) 045023. (I.F: 1.435, SCI).
          </p>
          <br />
          <hr />
          <p>
            Mati ur Rahman, Hameed Ullah Wazir, Matiullah Khan, Shaneela
            Nosheen, Sami Rahman, Asad Ullah. Precursor-Induced Template free
            hydrothermal synthesis of Faujasite and its Application in Catalytic
            Pyrolysis. Mater. Res. Express, 4 (2017) 055009. (I.F: 1.435, SCI).
          </p>
          <br />
          <hr />
          <p>
            Asad Ullah, Ubaidullah, Matiullah Khan, Xue Weihua, Safdar Hussain,
            Mujeeb ur Rahman, Nadeem Salamat, Fazal Haq. Simulations of grain
            growth in realistic 3D polycrystalline microstructures and the
            MacPherson–Srolovitz equation. Materials Research Express 4 (2017)
            066502. (I.F: 1.435 , SCI).
          </p>
          <br />
          <hr />
          <p>
            Asad Ullah, Three-dimensional reconstruction, visualization and
            simulation of cellular structures through digital image processing
            and analysis techniques”. Proceedings of 2nd National Conference on
            Computer Sciences and Information Technology (NCCSIT), Lahore
            Garrison University, March 28-29, 2018, Lahore Pakistan, page 7-8.,
            (Conference proceedings)
          </p>
          <br />
          <hr />
          <p>
            Asad Ullah, Musarat Shaheen, Asad Khan, Matiullah Khan, Khalid
            Iqbal. “Evaluation of topology-dependent growth rate equations of
            three-dimensional grains using realistic microstructure
            simulations”. Mater. Res. Exp., 6 (2018) 026523. (I.F: 1.45, SCI)
          </p>
          <br />
          <hr />
          <p>
            Asad Ullah, “Topological effects in cellular grain structures”. 3rd
            International Conference on Emerging Trends in Engineering,
            Management and Sciences, Gilgit, Pakistan, November 10-11 2018.
          </p>
          <br />
          <hr />
          <p>
            Matiullah Khan, Yi Zeng, Zhenghua Lan, Asad Ullah, “Modulating the
            photo-active anatase TiO2 by cationic co-dopants: A case of Iron and
            Lanthanum”. Mater. Res. Exp., 6 (2019) 065503. (I.F, 1.15, SCI)
          </p>
          <br />
          <hr />
          <p>
            Safdar Hussain, Abdullah Shah, Asad Ullah. “An Approximate
            Analytical Solution of the Allen-Cahn Equation using Homotopy
            Perturbation Method and Homotopy Analysis Method”. Heliyon, 5 (2019)
            e03060.
          </p>
          <br />
          <hr />
          <p>
            Xiaoya Huang, HaoWang, Weihua Xue, Asad Ullah, Song Xiang, Hailiang
            Huang, Li Meng, Guang Ma, Guanzhen Zhang. “A combined machine
            learning model for the prediction of time-temperature-transformation
            diagrams of high-alloy steels”. Journal of Alloys and Compounds, 823
            (2020) 153694. (I.F: 4.175, SCI)
          </p>
          <br />
          <hr />
          <p>
            Huang, H., Liu, G., Wang, H., Ullah, A., Hu, B.F. Dissolution
            Behavior and Kinetics of γ′ Phase During Solution Treatment in
            Powder Metallurgy Nickel-Based Superalloy. Metall and Mat Trans A,
            51 (2019). (I.F: 1.985, SCI)
          </p>
          <br />
          <hr />
          <p>
            Xiaoya Huang, HaoWang, Weihua Xue, Song Xiang, Hailiang Huang, Li
            Meng, Asad Ullah, Guang Ma. “Study on
            time-temperature-transformation diagrams of stainless steel using
            machine-learning approach”. Computational Materials Science, 171
            (2020) 109282. (I.F: 2.644, SCI)
          </p>
          <br />
          <hr />
          <p>
            Xiaoxiao Geng, Hao Wang, Asad Ullah, Weihua Xue, Song Xiang, Li
            Meng, Guang Ma. “Prediction of continuous cooling transformation
            diagrams for Ni-Cr-Mo welding steels via machine learning
            approaches”. JOM, (2020) https://doi.org/10.1007/s11837-020-04057-z.
            (I.F: 2.305, SCI)
          </p>

          <div
            className="close"
            onClick={() => setPopupState({ openPop: false })}
          >
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="heading">
        <h2>Research & Publication</h2>
      </div>
      <div className="research">
        <img src={Image_1} alt="" className="image-1"></img>
        <Publication
          heading="Optimal approach of three dimensional microstructure reconstructions and
        visualizations."
          para=" The research article, Optimal approach of three dimensional
        microstructure reconstructions and visualizations has been featured on
        the front cover of the issue (June 2013: Volume 3, Number 2) in the
        journal Materials express as highlights."
        ></Publication>
      </div>
      <div className="research-2">
        <Publication
          heading="Curvature-driven 3D grain growth equation."
          para="Currently, working towards derivation of a new curvature-driven 3D grain growth equation by taking into consideration both the geometrical properties and the topological changes associated with the grains, which can better describe the dynamics of 3D grain growth in space-filling polycrystalline structures. So far, the proposed grain growth models are either purely topological or geometrical."
        ></Publication>
        <img src={Image_2} alt="" className="image-2"></img>
      </div>
      <button
        className="read-more"
        onClick={() => setPopupState({ openPop: true, disableScroll: true })}
      >
        Read More
      </button>
    </div>
  );
}
export default Research;
