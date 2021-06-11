import React, { useState } from "react";
import { Patientleftmenu } from "./patientnav/patientLeftMenu";
import { useSelector, useDispatch } from "react-redux";
import { ChartScreen } from "./chart/ChartScreen";
import { AppointmentBase } from "./Appointment/AppointmentBase";
// import { APPOINTMENTLIST } from "../Data/dumby";
import { drappointmentFetch } from "../Fetch-cookie/drappFetch";
//auto save function?
export const WorkingScreen = () => {
  const patientNotes = useSelector((state) => state.patientChart.medicalChart);
  const patientHiv = useSelector((state) => state.patientChart.hiv);
  const dispatch = useDispatch();
  const patientId = useSelector((state) => state.patient.patientID);
  const patientName = useSelector((state) => state.patient.patientName);
  const patientPhone = useSelector((state) => state.patient.patientPhone);

  const patientMedication = useSelector(
    (state) => state.patientChart.medication
  );
  const patientList = useSelector((state) => state.patientList);
  const [showappointment, setshow] = useState(false);
  const patientDiagnosis = useSelector((state) => state.patientChart.diagnosis);
  const patientReminders = useSelector((state) => state.patientChart.reminder);
  const val = useSelector((state) => state.patientList);
  const propsFunc = {
    dispatch: dispatch,
    patientId: patientId,
    patientNotes: patientNotes,
    patientPhone: patientPhone,
    patientName: patientName,
    patientHiv: patientHiv,
    patientMedication: patientMedication,
    patientDiagnosis: patientDiagnosis,
    patientReminders: patientReminders,
    patientList: patientList,
  };

  return (
    <>
      {/* {patientId != "" ? <div>Loading</div> :} */}
      <div className="workingWrapper">
        {/* need function to match and pull data */}
        {/* menueyfvhasfh blk */}
        <menu className="menublk">
          <div className="icon">
            <svg width="73px" height="71px" viewBox="0 0 73 71">
              <title>Group 2</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="Desktop" transform="translate(-355.000000, -321.000000)">
                  <g id="Group-2" transform="translate(355.000000, 318.000000)">
                    <g id="noun_Stethoscope_1397533">
                      <text
                        id="i"
                        font-family="ArialMT, Arial"
                        font-size="21"
                        font-weight="normal"
                        letter-spacing="-0.291666667"
                        fill="#16214A"
                      >
                        <tspan x="52" y="52">
                          i
                        </tspan>
                      </text>
                      <g id="Group">
                        <rect
                          id="Rectangle"
                          x="1"
                          y="0"
                          width="75.0000732"
                          height="75.0000732"
                        ></rect>
                        <path
                          d="M5.01383253,7.01553908 C4.63314564,6.81513214 4.16185807,6.96127067 3.96139254,7.34195785 C3.92350271,7.41381598 -9.53531009,32.2813865 16.8822499,42.5549317 C17.2831795,42.7098933 17.7339358,42.5104673 17.8888988,42.1095382 C18.0438604,41.7085515 17.844492,41.2577937 17.4435053,41.1028321 C-7.32453645,31.4707866 5.30472881,8.13546595 5.34025131,8.06808307 C5.54071537,7.68729218 5.39457744,7.21600314 5.01383253,7.01553908 Z"
                          id="Path"
                          fill="#000000"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M29.311908,7.01564015 C28.931164,7.21610421 28.7850252,7.68739325 28.9854892,8.06813727 C29.0210147,8.13549715 41.6503502,31.4709433 16.8822352,41.1028863 L17.162863,41.8289647 L16.8798138,41.1010978 C16.8645887,41.1070379 16.8496518,41.1134394 16.8350034,41.1201869 L16.75213,41.1527133 L16.7558787,41.1622867 L16.7508036,41.1516752 C16.7278505,41.1606719 16.7055895,41.1707067 16.6840204,41.1815489 L16.6183908,41.2075008 C9.91297412,43.8864975 9.46440923,50.8240336 12.1922,57.6517063 C13.7854828,61.6398352 16.4756563,65.5950344 19.6132521,68.5870685 C22.8007846,71.6267395 26.4742647,73.6924056 29.9807818,73.8399741 C36.5127755,74.1148918 34.5,67.7286903 34.5,49 C34.5,42.5 39.5,27 41.5,26.5 C43.5,26 45.3108416,26.2504959 47.4042519,26.9153278 C50.0371646,27.7514424 52.5297158,29.4284016 54.3987704,31.4542092 C54.6901823,31.7709381 55.1832697,31.7914122 55.5,31.5 C55.8167288,31.2085881 55.837203,30.7155007 55.5457908,30.3987704 C54.7003988,29.4824759 53.7360329,28.6308948 52.690228,27.8822394 C51.2122002,26.8241708 49.5715065,25.9716853 47.8741036,25.4326523 C45.4827145,24.6732399 42.9756906,24.5314839 40.6378856,25.3004702 C38.2888306,26.0732053 33.2717434,42.5425083 33,49 C32.6337745,57.7013641 33,61.5 33,67.5 C33,73.5 32.8674253,73.120645 30,73 C26.901164,72.8695481 23.6201483,70.2554068 20.6871181,67.4584753 C17.7040781,64.6138485 15.1487875,60.8594064 13.6381513,57.0783187 C11.220981,51.028054 11.5106102,44.9235022 17.1919536,42.6536367 L17.2570642,42.6278 C17.2784602,42.6215139 17.2997409,42.614305 17.3208484,42.6060003 L17.4038371,42.5719167 C17.4179088,42.5673031 17.4319229,42.5623434 17.445937,42.5569223 C43.860256,32.2798783 30.4022692,7.4140142 30.3643737,7.3420903 C30.1639411,6.96137203 29.6925949,6.81523322 29.311908,7.01564015 Z"
                          id="Path"
                          fill="#000000"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M5.7944998,3.72652805 C6.47138571,3.72652805 7.08431356,4.00104297 7.52792434,4.44470649 C7.97153073,4.88831288 8.24610278,5.50129785 8.24610278,6.17818963 C8.24610278,6.85501695 7.97153073,7.46794479 7.52792434,7.91161417 C7.08431795,8.35522056 6.47139011,8.62973401 5.7944998,8.62973401 C5.11761388,8.62973401 4.50462891,8.3552191 4.06101666,7.91161417 C3.61735314,7.46789352 3.34295395,6.85502281 3.34295395,6.17818963 C3.34295395,5.50130371 3.61746886,4.88831874 4.06107379,4.44470649 C4.50468018,4.00104297 5.11760803,3.72652805 5.79449833,3.72652805 L5.7944998,3.72652805 Z M6.4235761,5.54904448 C6.26267311,5.38814149 6.04023637,5.28848661 5.7944998,5.28848661 C5.54882036,5.28848661 5.32632649,5.38814222 5.1654235,5.54904448 C5.00452051,5.70994747 4.90492276,5.93244134 4.90492276,6.17817791 C4.90492276,6.42385735 5.00452066,6.64640981 5.16536491,6.80725421 C5.3262679,6.9681572 5.54882036,7.06775495 5.79449833,7.06775495 C6.0402349,7.06775495 6.26267164,6.96815705 6.42357463,6.80725421 C6.58447762,6.64635122 6.6841325,6.42385735 6.6841325,6.17817791 C6.6841325,5.93244134 6.58447689,5.70994601 6.42357463,5.54904448 L6.4235761,5.54904448 Z"
                          id="Shape"
                          fill="#000000"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M28.3554593,5.34708628 C28.1097228,5.34708628 27.887286,5.44674189 27.726383,5.60764415 C27.56548,5.76854714 27.4658823,5.99104101 27.4658823,6.23677757 C27.4658823,6.48245701 27.5654802,6.70495088 27.726383,6.86585387 C27.887286,7.02675686 28.1097228,7.12635462 28.3554593,7.12635462 C28.6011388,7.12635462 28.8236912,7.02675672 28.9845928,6.86585387 C29.1454957,6.70495088 29.2450935,6.48245701 29.2450935,6.23677757 C29.2450935,5.99104101 29.1454956,5.76854567 28.9845928,5.60764415 C28.8236898,5.44674116 28.6011373,5.34708628 28.3554593,5.34708628 Z M26.6220348,4.5033003 C27.0656412,4.05963678 27.678569,3.78512186 28.3554593,3.78512186 C29.0323452,3.78512186 29.6453302,4.05963678 30.0889425,4.5033003 C30.5325489,4.94690669 30.8070623,5.55989166 30.8070623,6.23678343 C30.8070623,6.91361076 30.5325474,7.5265386 30.0889425,7.97020798 C29.6453361,8.41381437 29.0323511,8.68832782 28.3554593,8.68832782 C27.6785734,8.68832782 27.0656456,8.4138129 26.6220348,7.97020798 C26.1784284,7.52654446 25.9038564,6.91361661 25.9038564,6.23678343 C25.9038564,5.55989752 26.1784284,4.94691255 26.6220348,4.5033003 Z"
                          id="Shape"
                          fill="#000000"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M53.8896298,28.860787 C52.4954897,28.860787 51.2332942,29.4258481 50.3197288,30.3393578 C49.4062763,31.2528674 48.841158,32.5151069 48.841158,33.9092587 C48.841158,35.3033987 49.4062191,36.5656529 50.3197288,37.4791596 C51.2332956,38.3926693 52.495478,38.957789 53.8896298,38.957789 C55.2837698,38.957789 56.546024,38.3926708 57.4595307,37.4791596 C58.3730404,36.56565 58.9381601,35.3034105 58.9381601,33.9092587 C58.9381601,32.5151187 58.3730419,31.2529231 57.4595307,30.3393578 C56.546021,29.4258481 55.2837815,28.860787 53.8896298,28.860787 Z M49.2153967,29.2350139 C50.4116684,28.0388008 52.0642862,27.2988255 53.8896298,27.2988255 C55.7149148,27.2988255 57.3676556,28.0388023 58.5638629,29.2350139 C59.7600759,30.4312856 60.5001099,32.0839034 60.5001099,33.909247 C60.5001099,35.734532 59.7600745,37.3872728 58.5638629,38.5834801 C57.3676498,39.7796931 55.7149148,40.5197271 53.8896298,40.5197271 C52.0642862,40.5197271 50.4116625,39.7796917 49.2153967,38.5834801 C48.0191836,37.387267 47.2792083,35.734532 47.2792083,33.909247 C47.2792083,32.0839034 48.0191851,30.4312211 49.2153967,29.2350139 L49.2153967,29.2350139 Z"
                          id="Shape"
                          fill="#000000"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M53.8896298,32.1309074 C53.3985023,32.1309074 52.9538017,32.3299886 52.6320543,32.6517345 C52.3103069,32.9734819 52.1112272,33.4181825 52.1112272,33.90931 C52.1112272,34.4004945 52.3103084,34.845138 52.6320543,35.1668854 C52.9538017,35.4886328 53.3985023,35.6876555 53.8896298,35.6876555 C54.3808143,35.6876555 54.8254578,35.4886328 55.1472052,35.1668854 C55.4689526,34.845138 55.6679753,34.4004945 55.6679753,33.90931 C55.6679753,33.4181825 55.4689526,32.9734819 55.1472052,32.6517345 C54.8254578,32.3299871 54.3808143,32.1309074 53.8896298,32.1309074 Z M51.5277134,31.5473921 C52.1321642,30.9429414 52.9673559,30.5689444 53.8896298,30.5689444 C54.8119637,30.5689444 55.6470924,30.9429414 56.2515461,31.5473921 C56.8559969,32.1518429 57.2299353,32.9870347 57.2299353,33.9093085 C57.2299353,34.8316424 56.8559955,35.6667712 56.2515461,36.2712249 C55.6470954,36.8756757 54.8119608,37.2496726 53.8896298,37.2496726 C52.9673545,37.2496726 52.1321671,36.8756757 51.5277134,36.2712249 C50.9232626,35.6667741 50.5492657,34.8316395 50.5492657,33.9093085 C50.5492657,32.9870332 50.9232626,32.1518459 51.5277134,31.5473921 Z"
                          id="Shape"
                          fill="#000000"
                          fill-rule="nonzero"
                        ></path>
                        <circle
                          id="Oval"
                          fill="#FFFFFF"
                          cx="54.05"
                          cy="33.85"
                          r="5.05"
                        ></circle>
                        <circle
                          id="Oval"
                          fill="#CDA61D"
                          cx="54"
                          cy="33.9"
                          r="3.5"
                        ></circle>
                      </g>
                    </g>
                    <text
                      id="l"
                      font-family="ArialMT, Arial"
                      font-size="24"
                      font-weight="normal"
                      letter-spacing="-0.333333333"
                      fill="#16214A"
                    >
                      <tspan x="60" y="52">
                        l
                      </tspan>
                    </text>
                    <text
                      id="l"
                      font-family="ArialMT, Arial"
                      font-size="36"
                      font-weight="normal"
                      letter-spacing="-0.5"
                      fill="#16214A"
                    >
                      <tspan x="67" y="52">
                        l
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          {/* dynamic */}
          <div>John Harris</div>

          <div className="rightsideMenu">
            <button
              className="appointmentBtn"
              onClick={() => {
                setshow(true);
                drappointmentFetch(dispatch);
              }}
            >
              Appointments
            </button>
            <div className="bellicon"></div>
            <div className="lockicon"></div>
          </div>
          {showappointment ? <AppointmentBase setshow={setshow} /> : ""}
        </menu>
        {/* menueyfvhasfh blk */}
        {/* sidebar */}
        <div className="bottomStack">
          <Patientleftmenu />
          <div className="body">
            {patientId === "" ? (
              <div>Loading</div>
            ) : (
              <ChartScreen {...propsFunc} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
