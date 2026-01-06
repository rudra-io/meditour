

import type { Hospital, Treatment, Appointment, Doctor, Specialty } from './types';

export const specialties: Specialty[] = [
    { 
        name: 'Cardiology', 
        slug: 'cardiology', 
        icon: 'Heart',
        description: "Access world-class cardiac care in India, where top surgeons use cutting-edge technology for procedures like heart bypass and valve replacement. Our partner hospitals offer comprehensive services, from diagnosis to rehabilitation, ensuring you receive the best possible outcomes without the long wait times common elsewhere.",
        whoNeedsIt: "Individuals with heart conditions like coronary artery disease, valve disorders, or arrhythmias can benefit from consulting a cardiologist for expert diagnosis and treatment.",
        conditions: [
            "Coronary artery disease",
            "Heart failure",
            "Heart valve disease",
            "Arrhythmias (irregular heartbeat)",
            "High blood pressure (hypertension)"
        ],
        imageHint: "heart surgery",
        whoNeedsItImageHint: "chest pain",
        whatToExpect: {
            before: [
                "Comprehensive pre-surgery consultation with UK-based GP & India medical specialists.",
                "Travel coordination, visa assistance, and accommodation support.",
                "Preoperative medical evaluation, tests (blood, urine, ECG, X-rays), and discussion with your surgeon.",
                "Medication review, including guidance on stopping certain arthritis or blood-thinning medications before surgery.",
                "Pre-op tests and medical evaluations will be handled by the dedicated patient coordinator."
            ],
            during: [
                "Surgery will be performed under general or spinal anaesthesia.",
                "No food for at least six hours and only clear fluids up to two hours before surgery.",
                "Procedure typically lasts 2-4 hours.",
                "You will be monitored in an ICU post-operation.",
                "Hospital stay of 5-7 days required for initial recovery."
            ],
            after: [
                "Early movement and cardiac rehabilitation begins within 24-48 hours.",
                "Personalised physiotherapy plans & ongoing monitoring and support.",
                "Full rehabilitation, achieved within 6-12 weeks with guided exercises and expert care.",
                "Nutritionally balanced and customised meal plans.",
                "Access to a dedicated care team for post-surgery concerns."
            ]
        },
        faqs: [
            { question: "How do I know if I need heart surgery?", answer: "If you have symptoms like chest pain, shortness of breath, or have been diagnosed with coronary artery disease or valve issues, a specialist at TMTC will assess your condition to determine if surgery is necessary." },
            { question: "Who will perform my heart surgery?", answer: "Your surgery will be performed by a board-certified cardiothoracic surgeon in India with extensive experience in the specific procedure you require." },
            { question: "How long does it take to recover from heart surgery?", answer: "Recovery varies, but a hospital stay of 5-7 days is typical. You can expect a gradual return to normal activities over 6-12 weeks with cardiac rehabilitation." },
            { question: "What are the risks associated with heart surgery?", answer: "Like any major surgery, there are risks such as infection, bleeding, and reaction to anesthesia. Your surgeon will discuss these with you in detail." },
            { question: "Will I need cardiac rehabilitation after surgery?", answer: "Yes, cardiac rehab is a crucial part of recovery. It helps you regain strength and learn heart-healthy habits. We will create a personalized plan for you." }
        ]
    },
    { 
        name: 'Orthopedic & Joint Replacement', 
        slug: 'orthopedic-joint-replacement', 
        icon: 'Bone',
        description: "Regain your mobility with advanced orthopedic and joint replacement surgeries in India. Our specialists perform thousands of successful knee, hip, and shoulder replacements annually using robotic-assisted technology for greater precision and faster recovery, all at a fraction of the cost in the UK or US.",
        whoNeedsIt: "If you suffer from chronic joint pain, arthritis, or mobility issues due to joint damage, an orthopedic specialist can help restore your quality of life.",
        conditions: [
            "Osteoarthritis or rheumatoid arthritis",
            "Hip or knee joint pain",
            "Degenerative joint disease",
            "Sports injuries affecting joints",
            "Limited mobility due to pain"
        ],
        imageHint: "knee x-ray",
        whoNeedsItImageHint: "joint pain",
        whatToExpect: {
            before: [
                "Comprehensive pre-surgery consultation with UK-based GP & India medical specialists.",
                "Travel coordination, visa assistance, and accommodation support.",
                "Preoperative medical evaluation, tests (blood, urine, ECG, X-rays), and discussion with your surgeon.",
                "Medication review, including guidance on stopping certain arthritis or blood-thinning medications before surgery.",
                "Pre-op tests and medical evaluations will be handled by the dedicated patient coordinator."
            ],
            during: [
                "Surgery will be performed under general or spinal anaesthesia.",
                "No food for at least six hours and only clear fluids up to two hours before surgery.",
                "Procedure typically lasts 1-2 hours.",
                "Compression stockings may be recommended before and during surgery to reduce the risk of blood clots.",
                "Hospital stay of 3-5 days required for initial recovery."
            ],
            after: [
                "Early movement within 24 hours.",
                "Personalised physiotherapy plans & ongoing monitoring and support.",
                "Check into the luxurious aftercare facility for 2 weeks.",
                "Full rehabilitation, achieved within 6-12 weeks with guided exercises and expert care.",
                "Nutritionally balanced and customised meal plans.",
                "Access to a dedicated care team for post-surgery concerns."
            ]
        },
        faqs: [
            { question: "How do I know if I need knee replacement surgery?", answer: "If you experience persistent knee pain, stiffness, or difficulty with daily activities despite medication and therapy, a specialist at TMTC will assess your condition through physical exams and imaging tests (such as X-rays or MRIs) to determine if surgery is necessary." },
            { question: "Who will perform my knee replacement surgery?", answer: "Your surgery will be conducted by a highly experienced, board-certified orthopedic surgeon in India who specializes in joint replacement procedures." },
            { question: "How long does it take to recover from knee replacement surgery?", answer: "Recovery involves a hospital stay of 3-5 days, followed by a period of rehabilitation. Most patients return to normal activities within 3 to 6 months with dedicated physiotherapy." },
            { question: "What are the risks associated with knee replacement surgery?", answer: "Potential risks include infection, blood clots, and implant issues. Your surgeon will discuss all potential risks and how they are minimized in detail with you." },
            { question: "Will I need physical therapy after knee replacement surgery?", answer: "Yes, physical therapy is essential for a successful recovery. It helps restore movement, build strength, and improve the function of your new joint." }
        ]
    },
    { 
        name: 'Neurology', 
        slug: 'neurology', 
        icon: 'Brain',
        description: "Receive expert care for complex neurological disorders from leading specialists in India. Our network of hospitals is equipped with advanced neuro-imaging, surgical navigation systems, and dedicated ICUs to treat conditions like brain tumors, epilepsy, and Parkinson's disease with exceptional results.",
        whoNeedsIt: "Anyone experiencing symptoms related to the brain, spinal cord, or nerves, such as chronic headaches, seizures, or movement problems, should see a neurologist.",
        conditions: [
            "Epilepsy and seizures",
            "Stroke",
            "Multiple sclerosis (MS)",
            "Parkinson's disease",
            "Chronic migraines or severe headaches"
        ],
        imageHint: "brain scan",
        whoNeedsItImageHint: "headache person",
        whatToExpect: {
            before: [
                "Detailed neurological assessment and consultation with specialists in the UK and India.",
                "Advanced imaging tests such as MRI, CT, or PET scans to pinpoint the issue.",
                "Comprehensive travel and accommodation planning by your dedicated coordinator.",
                "Pre-procedure evaluation and discussion of the treatment plan with your neuro-specialist.",
                "Coordination of all pre-admission tests and medical clearances."
            ],
            during: [
                "Procedures are performed in a state-of-the-art neuro-interventional suite or operating room.",
                "Depending on the procedure, either general anesthesia or conscious sedation may be used.",
                "The duration varies widely based on the complexity of the condition.",
                "Continuous monitoring of neurological functions is standard.",
                "A stay in a dedicated neuro-ICU may be required for close observation."
            ],
            after: [
                "Post-procedure monitoring to manage recovery and any potential side effects.",
                "A personalized neuro-rehabilitation plan, which may include physical, occupational, or speech therapy.",
                "Medication management to control symptoms and aid recovery.",
                "Follow-up imaging to assess the outcome of the treatment.",
                "Ongoing support from your care team for any post-treatment questions."
            ]
        },
        faqs: [
            { question: "What is the difference between a neurologist and a neurosurgeon?", answer: "A neurologist diagnoses and treats neurological disorders with medication and other non-surgical treatments, while a neurosurgeon performs surgery on the brain, spinal cord, and nerves." },
            { question: "What kind of tests are involved in a neurological workup?", answer: "Common tests include MRI and CT scans for imaging, EEG to measure brain activity, and nerve conduction studies to assess nerve function." },
            { question: "How long is the recovery for neurosurgery?", answer: "Recovery time varies greatly depending on the type of surgery. It can range from a few weeks for minor procedures to several months for more complex brain or spine surgeries." },
            { question: "Is traveling after neurosurgery safe?", answer: "Your medical team will determine when it is safe for you to travel. We coordinate every aspect of your journey to ensure it is comfortable and medically supervised." },
            { question: "What support is available for neurological rehabilitation?", answer: "Our partner hospitals have comprehensive rehabilitation centers with expert therapists to help you regain function and independence." }
        ]
    },
    { 
        name: 'Haemato Oncology & BMT', 
        slug: 'haemato-oncology-bmt', 
        icon: 'GitMerge',
        description: "Access life-saving Bone Marrow Transplants (BMT) and treatments for blood cancers like leukemia and lymphoma. India's top BMT units have state-of-the-art facilities and follow international protocols, offering hope and advanced care with significantly lower costs and immediate availability.",
        whoNeedsIt: "This specialty is for patients diagnosed with blood cancers, bone marrow failure, or certain genetic disorders that require a bone marrow transplant.",
        conditions: [
            "Leukemia",
            "Lymphoma",
            "Myeloma",
            "Aplastic anemia",
            "Sickle cell anemia or Thalassemia"
        ],
        imageHint: "blood cells",
        whoNeedsItImageHint: "fatigued person",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Oncology', 
        slug: 'oncology', 
        icon: 'Stethoscope',
        description: "Fight cancer with comprehensive and personalized treatment plans in India. Our partner hospitals offer a multidisciplinary approach, combining surgery, chemotherapy, radiation, and immunotherapy. Benefit from the latest technologies, including robotic surgery and targeted therapies, without the wait.",
        whoNeedsIt: "Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer. A consultation is crucial upon any cancer diagnosis.",
        conditions: [
            "Solid tumors (e.g., breast, lung, prostate)",
            "Need for chemotherapy or radiation",
            "Second opinion for a cancer diagnosis",
            "Hereditary cancer risk assessment",
            "Management of cancer-related symptoms"
        ],
        imageHint: "cancer cell",
        whoNeedsItImageHint: "concerned person",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Spine & Scoliosis Surgery', 
        slug: 'spine-scoliosis-surgery', 
        icon: 'Spline',
        description: "Correct spinal deformities and relieve chronic back pain with advanced spine surgery in India. Our surgeons are experts in minimally invasive techniques, spinal fusion, and complex scoliosis correction, helping patients from around the world stand tall and live pain-free.",
        whoNeedsIt: "Individuals with spinal deformities, herniated discs, or chronic back and neck pain that hasn't responded to conservative treatments should see a spine specialist.",
        conditions: [
            "Scoliosis or other spinal deformities",
            "Herniated or slipped discs",
            "Spinal stenosis",
            "Chronic lower back or neck pain",
            "Sciatica"
        ],
        imageHint: "spine x-ray",
        whoNeedsItImageHint: "back pain",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Paediatric Cardiac Care', 
        slug: 'paediatric-cardiac-care', 
        icon: 'Baby',
        description: "Give your child the best chance with specialized pediatric cardiac care in India. Our world-renowned teams treat congenital heart defects and other complex heart conditions in children, providing compassionate, family-centered care in dedicated pediatric cardiac units with outstanding success rates.",
        whoNeedsIt: "This is a highly specialized field for infants, children, and adolescents with congenital (present at birth) or acquired heart problems.",
        conditions: [
            "Congenital heart defects (e.g., VSD, ASD)",
            "Heart murmurs in children",
            "Arrhythmias in children",
            "Kawasaki disease",
            "Rheumatic heart disease"
        ],
        imageHint: "child heart",
        whoNeedsItImageHint: "sick child",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Opthamology', 
        slug: 'opthamology', 
        icon: 'Eye',
        description: "Restore your vision with advanced ophthalmology services. From blade-free LASIK and cataract surgery to complex retinal procedures, our eye care centers use the latest technology to deliver precise and effective treatments. Enjoy clear vision at an affordable price with no waiting.",
        whoNeedsIt: "Ophthalmology addresses all aspects of eye care, from vision correction to the treatment of complex eye diseases like glaucoma and cataracts.",
        conditions: [
            "Cataracts",
            "Glaucoma",
            "Diabetic retinopathy",
            "Macular degeneration",
            "Need for vision correction (LASIK)"
        ],
        imageHint: "eye exam",
        whoNeedsItImageHint: "blurry vision",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Urology & Kidney Transplant', 
        slug: 'urology-kidney-transplant', 
        icon: 'Beaker',
        description: "Access world-class urological care, including life-saving kidney transplants, in India. Our transplant centers have high success rates and adhere to strict international standards. We provide comprehensive care for both donors and recipients, along with advanced treatments for all urological conditions.",
        whoNeedsIt: "This specialty covers conditions of the urinary tract and male reproductive system, including kidney failure, prostate issues, and bladder problems.",
        conditions: [
            "End-stage renal disease (kidney failure)",
            "Kidney stones",
            "Prostate enlargement (BPH)",
            "Urinary incontinence",
            "Bladder or prostate cancer"
        ],
        imageHint: "kidney anatomy",
        whoNeedsItImageHint: "swollen ankles",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Liver Transplant & GI & HPB Surgery', 
        slug: 'liver-transplant-gi-hpb-surgery', 
        icon: 'Activity',
        description: "Receive a second chance at life with a liver transplant from India’s leading centers. Our comprehensive programs for liver, pancreatic, and gastrointestinal surgeries are led by internationally recognized surgeons, offering hope and healing for complex digestive and liver diseases.",
        whoNeedsIt: "For patients with end-stage liver disease, liver cancer, or complex GI and pancreatic disorders, this specialty offers life-saving surgical options.",
        conditions: [
            "Cirrhosis or end-stage liver failure",
            "Liver cancer",
            "Pancreatic or bile duct cancer",
            "Severe pancreatitis",
            "Complex gastrointestinal diseases"
        ],
        imageHint: "liver anatomy",
        whoNeedsItImageHint: "jaundice skin",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Cardiac Thoracic & Vascular Surgery', 
        slug: 'cardiac-thoracic-vascular-surgery', 
        icon: 'Heart',
        description: "Benefit from the expertise of India's top cardiothoracic surgeons for complex heart, lung, and blood vessel procedures. Our hospitals are equipped with hybrid operating rooms and advanced robotic systems to perform minimally invasive surgeries, ensuring quicker recovery and better outcomes.",
        whoNeedsIt: "This surgical specialty treats conditions of the heart, lungs, esophagus, and major blood vessels in the chest, often requiring complex surgical intervention.",
        conditions: [
            "Need for heart bypass or valve surgery",
            "Aortic aneurysm",
            "Lung cancer requiring surgery",
            "Peripheral vascular disease",
            "Esophageal cancer"
        ],
        imageHint: "heart surgery",
        whoNeedsItImageHint: "shortness breath",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Radiation Oncology', 
        slug: 'radiation-oncology', 
        icon: 'Radiation',
        description: "Utilize the most advanced radiation therapies to target cancer with pinpoint accuracy. Our centers feature technologies like CyberKnife and Proton Therapy, which minimize damage to surrounding healthy tissue. Receive a highly precise and effective form of cancer treatment without delays.",
        whoNeedsIt: "Radiation therapy is a key component of cancer treatment, using high-energy rays to destroy cancer cells. It's used for many types of cancer.",
        conditions: [
            "Brain tumors",
            "Prostate cancer",
            "Head and neck cancers",
            "Lung cancer",
            "As part of a broader cancer treatment plan"
        ],
        imageHint: "radiation machine",
        whoNeedsItImageHint: "cancer patient",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Cosmetic & Plastic Surgery', 
        slug: 'cosmetic-plastic-surgery', 
        icon: 'Smile',
        description: "Enhance your appearance and confidence with a wide range of cosmetic and plastic surgery procedures. Our board-certified surgeons specialize in creating natural-looking results for procedures like rhinoplasty, breast augmentation, and facelifts, all in state-of-the-art, private facilities.",
        whoNeedsIt: "For individuals seeking to improve their physical appearance, correct deformities, or reverse signs of aging through surgical and non-surgical procedures.",
        conditions: [
            "Desire to change nose shape (rhinoplasty)",
            "Breast augmentation or reduction",
            "Excess body fat (liposuction)",
            "Signs of facial aging (facelift)",
            "Tummy tuck (abdominoplasty)"
        ],
        imageHint: "face measurement",
        whoNeedsItImageHint: "person mirror",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'ENT & Cochlear Implant', slug: 'ent-cochlear-implant', icon: 'Ear',
        description: "Resolve hearing and sinus issues with expert ENT care. Our specialists perform advanced procedures like cochlear implants to restore hearing and functional endoscopic sinus surgery (FESS) for chronic sinusitis, using the latest equipment to ensure the best possible results.",
        whoNeedsIt: "This specialty treats a wide range of conditions affecting the ear, nose, throat, and related structures of the head and neck, from hearing loss to sinus problems.",
        conditions: [
            "Severe to profound hearing loss",
            "Chronic sinusitis",
            "Tonsillitis or adenoid problems",
            "Sleep apnea",
            "Thyroid disorders"
        ],
        imageHint: "ear anatomy",
        whoNeedsItImageHint: "hearing problem",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'General & Minimally Invasive Surgery', 
        slug: 'general-minimally-invasive-surgery', 
        icon: 'Scissors',
        description: "Opt for safer, faster recovery with minimally invasive surgery. Our general surgeons use laparoscopic and robotic techniques for procedures like hernia repair, gallbladder removal, and bariatric surgery, resulting in less pain, smaller scars, and a quicker return to your daily life.",
        whoNeedsIt: "For common abdominal conditions, minimally invasive surgery offers a modern alternative to traditional open surgery, with significant benefits for recovery.",
        conditions: [
            "Hernias (inguinal, umbilical)",
            "Gallbladder stones",
            "Appendicitis",
            "Severe acid reflux (GERD)",
            "Morbid obesity (bariatric surgery)"
        ],
        imageHint: "laparoscopic surgery",
        whoNeedsItImageHint: "abdominal pain",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Gastroenterology', 
        slug: 'gastroenterology', 
        icon: 'Microwave',
        description: "Find solutions for digestive health issues with leading gastroenterologists in India. Our hospitals offer advanced diagnostic and therapeutic endoscopy, colonoscopy, and ERCP services to diagnose and treat conditions of the stomach, intestines, and liver with precision and care.",
        whoNeedsIt: "Anyone with persistent digestive issues like acid reflux, abdominal pain, or irregular bowel movements should consult a gastroenterologist.",
        conditions: [
            "Chronic heartburn or acid reflux (GERD)",
            "Inflammatory bowel disease (Crohn's, Ulcerative Colitis)",
            "Irritable bowel syndrome (IBS)",
            "Chronic constipation or diarrhea",
            "Need for colon cancer screening (colonoscopy)"
        ],
        imageHint: "digestive system",
        whoNeedsItImageHint: "stomach ache",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Dermatology & Cosmetology', 
        slug: 'dermatology-cosmetology', 
        icon: 'PersonStanding',
        description: "Achieve healthy, radiant skin with our expert dermatology and cosmetology services. We offer advanced treatments for acne, psoriasis, and skin cancer, as well as cosmetic procedures like laser hair removal, fillers, and Botox in state-of-the-art clinics.",
        whoNeedsIt: "For any condition affecting the skin, hair, or nails, as well as cosmetic concerns, a dermatologist provides expert diagnosis and treatment.",
        conditions: [
            "Severe acne or acne scars",
            "Psoriasis or eczema",
            "Suspicious moles or skin lesions",
            "Hair loss (alopecia)",
            "Desire for non-surgical facial rejuvenation"
        ],
        imageHint: "skin care",
        whoNeedsItImageHint: "skin problem",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Dentistry', 
        slug: 'dentistry', 
        icon: 'Smile',
        description: "Transform your smile with high-quality, affordable dental care. Our dental centers specialize in cosmetic dentistry, dental implants, and full mouth rehabilitation. Using state-of-the-art technology like 3D scanning and CAD/CAM, we create beautiful, lasting results in a comfortable setting.",
        whoNeedsIt: "For everything from routine check-ups to complete smile makeovers, modern dentistry offers solutions to maintain oral health and improve aesthetics.",
        conditions: [
            "Missing teeth (requiring implants)",
            "Crooked or misaligned teeth",
            "Desire for a smile makeover (veneers)",
            "Gum disease",
            "Chronic jaw pain (TMJ)"
        ],
        imageHint: "dental implant",
        whoNeedsItImageHint: "tooth ache",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'IVF, Reproductive Medicine', 
        slug: 'ivf-reproductive-medicine', 
        icon: 'FlaskConical',
        description: "Realize your dream of parenthood with our advanced IVF and reproductive medicine programs. Our fertility centers in India have high success rates and offer a full range of services, including IVF, ICSI, and egg donation, all provided with compassion and discretion.",
        whoNeedsIt: "For couples or individuals facing challenges with conception, reproductive medicine offers a range of technologies and treatments to help achieve pregnancy.",
        conditions: [
            "Infertility (male or female)",
            "Polycystic ovary syndrome (PCOS)",
            "Endometriosis",
            "Blocked fallopian tubes",
            "Recurrent pregnancy loss"
        ],
        imageHint: "embryo development",
        whoNeedsItImageHint: "sad couple",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Obstetrics & Gynaecology', 
        slug: 'obstetrics-gynaecology', 
        icon: 'Baby',
        description: "Receive comprehensive care for all aspects of women's health. Our obstetrics and gynecology departments provide everything from routine check-ups and high-risk pregnancy management to minimally invasive gynecological surgeries, all in a supportive and modern environment.",
        whoNeedsIt: "This specialty focuses on female reproductive health, pregnancy, and childbirth. Regular check-ups are essential for women of all ages.",
        conditions: [
            "High-risk pregnancy",
            "Uterine fibroids",
            "Ovarian cysts",
            "Menstrual disorders",
            "Pelvic pain"
        ],
        imageHint: "pregnant ultrasound",
        whoNeedsItImageHint: "pregnant woman",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Neurointerventional Surgery', 
        slug: 'neurointerventional-surgery', 
        icon: 'BrainCircuit',
        description: "Benefit from cutting-edge, minimally invasive procedures for treating strokes, aneurysms, and other complex brain and spine vascular conditions. Neurointerventional surgery offers a safer alternative to open surgery, with faster recovery times and reduced risk.",
        whoNeedsIt: "This is a subspecialty of neuroradiology and neurosurgery that uses minimally invasive, catheter-based techniques to treat vascular conditions of the brain and spine.",
        conditions: [
            "Brain aneurysm",
            "Acute ischemic stroke",
            "Arteriovenous malformations (AVMs)",
            "Carotid artery stenosis",
            "Dural arteriovenous fistulas"
        ],
        imageHint: "brain aneurysm",
        whoNeedsItImageHint: "severe headache",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Medical Oncology', 
        slug: 'medical-oncology', 
        icon: 'Stethoscope',
        description: "Receive personalized cancer care managed by expert medical oncologists. They specialize in diagnosing and treating cancer using non-surgical methods like chemotherapy, immunotherapy, hormonal therapy, and targeted therapy, ensuring you get the most effective treatment for your specific cancer type.",
        whoNeedsIt: "A medical oncologist is the main healthcare provider for someone who has cancer, coordinating treatment plans and managing side effects.",
        conditions: [
            "Newly diagnosed cancer",
            "Metastatic cancer",
            "Need for chemotherapy or immunotherapy",
            "Consultation for targeted therapy options",
            "Long-term cancer survivorship planning"
        ],
        imageHint: "cancer cell",
        whoNeedsItImageHint: "cancer patient",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Surgical Oncology', 
        slug: 'surgical-oncology', 
        icon: 'Scissors',
        description: "Undergo cancer surgery with highly skilled surgical oncologists who specialize in the removal of tumors. Our surgeons use the latest techniques, including robotic and minimally invasive surgery, to remove cancerous tissue while preserving healthy organs and function.",
        whoNeedsIt: "Surgical oncology is focused on the surgical management of cancer, including tumor removal and biopsies. It is a critical part of treatment for many cancers.",
        conditions: [
            "Breast cancer requiring lumpectomy or mastectomy",
            "Colon cancer requiring resection",
            "Melanoma removal",
            "Stomach or esophageal cancer surgery",
            "Sarcoma removal"
        ],
        imageHint: "robotic surgery",
        whoNeedsItImageHint: "cancer diagnosis",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Gynaecological Oncology', 
        slug: 'gynaecological-oncology', 
        icon: 'Stethoscope',
        description: "Receive specialized care for cancers of the female reproductive system. Our gynecological oncologists are experts in treating ovarian, uterine, and cervical cancers using a combination of advanced surgery, chemotherapy, and radiation, all tailored to your specific needs.",
        whoNeedsIt: "This subspecialty is dedicated to diagnosing and treating cancers of the female reproductive organs, requiring expert, focused care.",
        conditions: [
            "Ovarian cancer",
            "Cervical cancer",
            "Uterine or endometrial cancer",
            "Vaginal or vulvar cancer",
            "Abnormal pap smear results requiring follow-up"
        ],
        imageHint: "female anatomy",
        whoNeedsItImageHint: "pelvic pain",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Paediatric Surgery', 
        slug: 'paediatric-surgery', 
        icon: 'Baby',
        description: "Ensure your child receives the safest and most effective surgical care. Our pediatric surgeons are specially trained to operate on infants, children, and adolescents for a wide range of conditions, from common hernia repairs to complex congenital anomalies, in a child-friendly environment.",
        whoNeedsIt: "Pediatric surgeons are experts in providing surgical care for children, from newborns to teenagers, for conditions requiring surgical intervention.",
        conditions: [
            "Congenital anomalies",
            "Appendicitis in children",
            "Inguinal hernias in infants",
            "Undescended testes",
            "Pyloric stenosis"
        ],
        imageHint: "child surgery",
        whoNeedsItImageHint: "sick child",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Internal Medicine', 
        slug: 'internal-medicine', 
        icon: 'Stethoscope',
        description: "Get a comprehensive diagnosis and care for complex adult illnesses. Our internal medicine specialists (internists) are experts in managing chronic diseases and situations where multiple conditions coexist, providing thoughtful, evidence-based care to solve challenging diagnostic puzzles.",
        whoNeedsIt: "Internists are specialists who apply scientific knowledge and clinical expertise to the diagnosis, treatment, and compassionate care of adults across the spectrum from health to complex illness.",
        conditions: [
            "Multiple chronic conditions (e.g., diabetes, hypertension)",
            "Complex, undiagnosed symptoms",
            "Management of chronic diseases",
            "Preventive medicine and health screening",
            "Pre-operative assessment"
        ],
        imageHint: "doctor thinking",
        whoNeedsItImageHint: "multiple symptoms",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Neuro Surgery', 
        slug: 'neuro-surgery', 
        icon: 'Brain',
        description: "Trust our world-class neurosurgeons for delicate brain and spine procedures. Our hospitals are equipped with intraoperative MRI and advanced neuronavigation, allowing for precise tumor removal and complex spine surgeries with a focus on patient safety and preserving function.",
        whoNeedsIt: "Neurosurgery is the surgical specialty that treats diseases and disorders of the brain, spinal cord, and peripheral nerves.",
        conditions: [
            "Brain tumors",
            "Spinal cord tumors",
            "Herniated discs requiring surgery",
            "Traumatic brain or spine injury",
            "Hydrocephalus"
        ],
        imageHint: "brain surgery",
        whoNeedsItImageHint: "nerve pain",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Diabetes & Endocrinology', 
        slug: 'diabetes-endocrinology', 
        icon: 'FlaskConical',
        description: "Manage diabetes and hormonal disorders effectively with our expert endocrinologists. We offer comprehensive management programs for diabetes, thyroid disorders, and other endocrine conditions, utilizing the latest medications and technologies like insulin pumps and continuous glucose monitoring.",
        whoNeedsIt: "This specialty deals with the endocrine system, its diseases, and its specific secretions known as hormones. It's essential for managing diabetes and thyroid issues.",
        conditions: [
            "Type 1 or Type 2 Diabetes",
            "Thyroid disorders (hyper/hypothyroidism)",
            "Polycystic ovary syndrome (PCOS)",
            "Osteoporosis",
            "Adrenal or pituitary gland disorders"
        ],
        imageHint: "glucose monitor",
        whoNeedsItImageHint: "high bloodsugar",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    },
    { 
        name: 'Nephrology', 
        slug: 'nephrology', 
        icon: 'Beaker',
        description: "Receive comprehensive care for kidney diseases from leading nephrologists. Our centers provide everything from the management of chronic kidney disease and hypertension to state-of-the-art dialysis and pre-transplant workups, focusing on preserving kidney function and improving quality of life.",
        whoNeedsIt: "Nephrology is a specialty of medicine that concerns itself with the kidneys. It's crucial for anyone with kidney disease, high blood pressure, or electrolyte imbalances.",
        conditions: [
            "Chronic kidney disease (CKD)",
            "Kidney failure requiring dialysis",
            "High blood pressure (hypertension)",
            "Protein or blood in the urine",
            "Polycystic kidney disease"
        ],
        imageHint: "dialysis machine",
        whoNeedsItImageHint: "swollen legs",
        whatToExpect: {
            before: [],
            during: [],
            after: []
        },
        faqs: []
    }
];

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'Artemis Hospital',
    city: 'Gurugram',
    country: 'India',
    specializations: ['Cardiology', 'Oncology', 'Orthopedics', 'Opthamology'],
    services: ['24/7 Emergency', 'In-patient Care', 'Surgical Services', 'Rehabilitation'],
    description: 'A world-renowned hospital known for its advanced cardiac and cancer treatment centers. Offers state-of-the-art facilities and a team of internationally trained doctors.',
    imageUrl: 'https://picsum.photos/seed/artemis/600/400',
    rating: 4.9,
    reviews: 1200,
  },
  {
    id: '2',
    name: 'Fortis Memorial Research Institute',
    city: 'Gurugram',
    country: 'India',
    specializations: ['Cosmetic & Plastic Surgery', 'Dermatology & Cosmetology', 'Wellness', 'ENT & Cochlear Implant', 'Dentistry'],
    services: ['Advanced Skincare', 'Plastic Surgery', 'Anti-aging Treatments', 'Spa & Wellness'],
    description: 'A leading center for cosmetic and dermatological procedures, blending medical expertise with luxurious patient care for transformative results.',
    imageUrl: 'https://picsum.photos/seed/fortis/600/400',
    rating: 4.8,
    reviews: 850,
  },
  {
    id: '3',
    name: 'Medanta Hospital',
    city: 'Gurugram',
    country: 'India',
    specializations: ['Orthopedic & Joint Replacement', 'Spine & Scoliosis Surgery', 'Sports Medicine'],
    services: ['Joint Replacement', 'Minimally Invasive Spine Surgery', 'Physical Therapy'],
    description: 'Specializing in musculoskeletal conditions, this hospital uses cutting-edge robotic-assisted surgery for precision and faster recovery.',
    imageUrl: 'https://picsum.photos/seed/medanta/600/400',
    rating: 4.9,
    reviews: 980,
  },
  {
    id: '4',
    name: 'Apollo Hospital',
    city: 'New Delhi',
    country: 'India',
    specializations: ['Oncology', 'Radiation Oncology', 'Hematology'],
    services: ['Chemotherapy', 'Radiation Therapy', 'Clinical Trials', 'Supportive Care'],
    description: 'A dedicated cancer treatment and research facility, offering access to the latest therapies and groundbreaking clinical trials.',
    imageUrl: 'https://picsum.photos/seed/apollo/600/400',
    rating: 4.9,
    reviews: 2100,
  },
  {
    id: '5',
    name: 'Shallby Sanar International Hospital',
    city: 'Gurugram',
    country: 'India',
    specializations: ['Urology & Kidney Transplant', 'Nephrology', 'Transplant'],
    services: ['Kidney Transplant', 'Dialysis', 'Urological Surgeries'],
    description: 'A center of excellence for renal sciences and organ transplantation.',
    imageUrl: 'https://picsum.photos/seed/shallby/600/400',
    rating: 4.7,
    reviews: 750,
  },
  {
    id: '6',
    name: 'CK Birla Hospital',
    city: 'Gurugram',
    country: 'India',
    specializations: ['Obstetrics & Gynaecology', 'Paediatric Surgery', 'IVF, Reproductive Medicine'],
    services: ['High-Risk Pregnancy Care', 'Neonatal ICU', 'Laparoscopic Surgery'],
    description: 'A comprehensive hospital for women and children with a focus on compassionate care.',
    imageUrl: 'https://picsum.photos/seed/ckbirla/600/400',
    rating: 4.8,
    reviews: 600,
  },
  {
    id: '7',
    name: 'BLK-Max Super Speciality Hospital',
    city: 'New Delhi',
    country: 'India',
    specializations: ['Liver Transplant & GI & HPB Surgery', 'Gastroenterology', 'General & Minimally Invasive Surgery'],
    services: ['Advanced laparoscopic surgeries', 'HPB surgery', 'Liver and Pancreas Clinic'],
    description: 'One of the largest private sector hospitals in Delhi, known for its expertise in digestive and liver diseases.',
    imageUrl: 'https://picsum.photos/seed/blkmax/600/400',
    rating: 4.8,
    reviews: 1500,
  },
  {
    id: '8',
    name: 'Max Super Speciality Saket Hospital',
    city: 'New Delhi',
    country: 'India',
    specializations: ['Cardiac Thoracic & Vascular Surgery', 'Neuro Surgery', 'Haemato Oncology & BMT'],
    services: ['Robotic Surgery', 'ECMO', 'Comprehensive Cancer Care'],
    description: 'A leading multi-speciality hospital providing tertiary care with over 50 medical disciplines.',
    imageUrl: 'https://picsum.photos/seed/maxsaket/600/400',
    rating: 4.9,
    reviews: 2500,
  }
];

export const treatments: Treatment[] = [
  { 
    id: 't1', name: 'Heart Bypass Surgery (CABG)', hospitalId: '1', 
    description: 'Coronary artery bypass grafting to improve blood flow to the heart.', cost: 15000, duration: '10-14 days', category: 'Cardiology',
    details: {
      procedure: "Coronary Artery Bypass Grafting (CABG) is a surgical procedure for patients with severe coronary heart disease. It involves taking a healthy blood vessel from another part of your body and grafting it to the coronary artery, bypassing the blocked section. This creates a new path for oxygen-rich blood to flow to the heart muscle, relieving chest pain and reducing the risk of a heart attack.",
      recovery: "Patients typically spend 1-2 days in the Intensive Care Unit (ICU) for close monitoring, followed by a 5-7 day stay in the hospital. Full recovery can take 6 to 12 weeks. Our team provides a structured cardiac rehabilitation plan to help you regain strength and will coordinate follow-up care with your home doctor.",
      inclusions: ["Airport pickup and drop-off", "Private room for hospital stay", "All pre-operative tests (ECG, Echo, blood tests)", "Surgeon, anesthetist, and operating room fees", "All medications and consumables during hospital stay", "Personal care assistant", "Post-operative follow-up consultations", "Visa assistance"],
      exclusions: ["Airfare", "Accommodation for companion", "Post-discharge medications", "Any additional, unplanned procedures"]
    }
  },
  { 
    id: 't2', name: 'Robotic Knee Replacement', hospitalId: '3', 
    description: 'Total knee arthroplasty using robotic assistance for precision.', cost: 12000, duration: '7-10 days', category: 'Orthopedic & Joint Replacement',
    details: {
      procedure: "This procedure uses a robotic arm to assist the surgeon in replacing a damaged knee joint with an artificial one. The robotic system provides real-time data to enhance the surgeon's precision, which can lead to better implant placement, improved longevity, and a more natural-feeling joint.",
      recovery: "Hospital stay is typically 2-3 days. A dedicated physiotherapy team begins your rehabilitation right in your hospital room. Most patients can walk with a cane within a week and return to most daily activities within 3-6 months. We arrange for continued physiotherapy upon your return home.",
      inclusions: ["Robotic surgery costs", "High-flexion knee implant", "Private hospital room", "In-hospital physiotherapy sessions", "Dedicated care coordinator and translator", "All pre-operative consultations and imaging"],
      exclusions: ["Airfare and visa fees", "Post-discharge physiotherapy", "Extended stay beyond package duration"]
    }
  },
  { 
    id: 't3', name: 'Rhinoplasty (Nose Job)', hospitalId: '2', 
    description: 'Cosmetic surgery to reshape the nose.', cost: 8000, duration: '5-7 days', category: 'Cosmetic & Plastic Surgery',
    details: {
      procedure: "Rhinoplasty is a cosmetic surgery to improve the appearance of the nose or to correct breathing problems. The surgeon makes incisions to access the bones and cartilage that support the nose, which are then reshaped to achieve the desired look and function. Our surgeons are skilled in creating natural-looking results that harmonize with your facial features.",
      recovery: "A splint is worn for about one week. Swelling and bruising are common but subside over several weeks. While initial results are visible once the splint is removed, the final, refined shape of your nose will emerge over 6-12 months. We provide detailed post-operative care instructions to ensure a smooth recovery.",
      inclusions: ["Consultation with a board-certified plastic surgeon", "Surgery and anesthesia fees", "Hospital stay for one night", "All post-operative follow-ups", "Medications and dressing supplies", "Local transportation for appointments"],
      exclusions: ["Airfare and accommodation", "Any revision surgeries", "Personal expenses"]
    }
  },
  { 
    id: 't4', name: 'PET-CT Cancer Screening', hospitalId: '4', 
    description: 'Full-body screening to detect cancers at an early stage.', cost: 2500, duration: '1 day', category: 'Oncology',
    details: {
      procedure: "A PET-CT scan is a powerful diagnostic tool that combines Positron Emission Tomography (PET) and Computed Tomography (CT) to provide detailed information about both the structure and metabolic activity of cells. It's highly effective for detecting cancer, determining if it has spread, and assessing the effectiveness of treatment.",
      recovery: "This is a non-invasive outpatient procedure with no recovery time. You can resume your normal activities immediately after the scan. Our team will ensure you receive and understand your comprehensive report promptly.",
      inclusions: ["Full-body PET-CT scan", "Consultation with a senior oncologist to discuss the results", "Detailed diagnostic report", "Priority scheduling"],
      exclusions: ["Accommodation and travel", "Any follow-up treatments or biopsies, if required"]
    }
  },
  { 
    id: 't5', name: 'LASIK Eye Surgery', hospitalId: '1', 
    description: 'Laser procedure to correct vision problems.', cost: 3000, duration: '2 days', category: 'Opthamology',
    details: {
      procedure: "LASIK (Laser-Assisted in Situ Keratomileusis) is a popular laser refractive surgery to correct vision problems like nearsightedness, farsightedness, and astigmatism. Using an advanced femtosecond and excimer laser system, the cornea is precisely reshaped, improving how the eye focuses light onto the retina.",
      recovery: "The procedure is quick, usually lasting less than 30 minutes for both eyes. Vision improves almost immediately, though it may be blurry for a day. Most people can return to work the next day. We schedule your follow-up appointments to monitor your healing.",
      inclusions: ["Comprehensive pre-operative eye examination", "Bladeless LASIK procedure for both eyes", "Post-operative medication kit", "Protective eyewear", "Follow-up consultations for 3 months"],
      exclusions: ["Cost of travel and stay", "Treatment for any unrelated eye conditions discovered during evaluation"]
    }
  },
  { 
    id: 't6', name: 'Kidney Transplant', hospitalId: '5', 
    description: 'Package for renal transplant surgery, including donor and recipient care.', cost: 25000, duration: '21-28 days', category: 'Urology & Kidney Transplant',
    details: {
      procedure: "A surgical procedure to place a healthy kidney from a living or deceased donor into a person whose kidneys no longer function properly. It is the definitive treatment for end-stage renal disease. Our hospitals have dedicated transplant units and follow stringent international protocols for donor matching and surgery.",
      recovery: "The recipient typically stays in the hospital for 4-7 days, often in a specialized transplant ICU initially. Full recovery takes about six months. You will need to take immunosuppressive drugs for life to prevent organ rejection. Our team provides extensive counseling on post-transplant life and medication management.",
      inclusions: ["Recipient and Donor (if applicable) legal and medical evaluation", "Surgery for recipient and donor", "Hospital stay in a dedicated transplant unit", "Post-transplant medications during hospital stay", "Lifelong follow-up plan coordination with home doctors"],
      exclusions: ["Donor acquisition costs", "Cost of anti-rejection medication after discharge", "Travel and accommodation costs"]
    }
  },
  { 
    id: 't7', name: 'Brain Tumor Surgery', hospitalId: '8', 
    description: 'Surgical removal of brain tumors with advanced neuro-navigation.', cost: 20000, duration: '14-21 days', category: 'Neuro Surgery',
    details: {
      procedure: "Craniotomy and tumor resection using state-of-the-art technology like neuronavigation and intraoperative MRI to maximize tumor removal while preserving critical brain function. The specific approach depends on the tumor's type, size, and location, and is planned meticulously by a multi-disciplinary team.",
      recovery: "Recovery varies greatly and depends on the complexity of the surgery. It involves a stay in the neuro-ICU and hospital, followed by a personalized rehabilitation program which may include physical, occupational, and speech therapy. Our team coordinates this entire continuum of care.",
      inclusions: ["Comprehensive pre-surgical evaluation with MRI/CT", "Neurosurgery and anesthesia fees", "ICU and hospital stay", "Post-operative imaging and care", "Initial neuro-rehabilitation sessions", "Dedicated neurological care coordinator"],
      exclusions: ["Long-term rehabilitation", "Chemotherapy or radiation if required post-surgery", "Travel and accommodation"]
    }
  },
  { 
    id: 't8', name: 'Bone Marrow Transplant', hospitalId: '8', 
    description: 'Allogeneic or autologous BMT for blood cancers and disorders.', cost: 35000, duration: '30-45 days', category: 'Haemato Oncology & BMT',
    details: {
      procedure: "A bone marrow transplant (BMT) replaces damaged or destroyed bone marrow with healthy bone marrow stem cells. It can be autologous (using the patient's own cells) or allogeneic (using a donor's cells). It's a critical treatment for leukemia, lymphoma, aplastic anemia, and other life-threatening blood diseases.",
      recovery: "This is an intensive treatment requiring a long hospital stay (4-6 weeks) in a specialized, HEPA-filtered isolation unit to prevent infection. Full recovery of the immune system can take months to over a year. We provide a fully-furnished service apartment for post-discharge recovery before you are fit to fly home.",
      inclusions: ["Pre-transplant conditioning regimen (chemotherapy)", "Stem cell infusion", "Extended hospital stay in HEPA-filtered room", "All medications and required blood products during admission", "Post-transplant monitoring", "Accommodation for 1 month post-discharge"],
      exclusions: ["Donor search and procurement costs (for allogeneic)", "Travel to India", "Long-term follow-up medications"]
    }
  },
  { 
    id: 't9', name: 'Spinal Fusion Surgery', hospitalId: '3', 
    description: 'Surgical procedure to fuse two or more vertebrae in the spine.', cost: 18000, duration: '10-14 days', category: 'Spine & Scoliosis Surgery',
    details: {
      procedure: "Spinal fusion is a surgical technique to join two or more vertebrae. This is done to eliminate painful motion, provide stability, or correct a deformity. The procedure uses bone grafts (from the patient or a donor) and instrumentation like rods and screws to hold the vertebrae together until they heal into a single, solid bone.",
      recovery: "Hospital stay is usually 2-4 days. A back brace may be required for a period after surgery. Recovery can be slow, with restrictions on bending and lifting for several months. We ensure a comprehensive physiotherapy plan is in place to facilitate a successful outcome.",
      inclusions: ["Spinal hardware and bone graft materials", "Surgery by a senior spine specialist", "Private hospital room stay", "Post-operative bracing", "Initial in-hospital physiotherapy"],
      exclusions: ["Airfare", "Extended physiotherapy post-discharge", "Accommodation for companion"]
    }
  },
  { 
    id: 't10', name: 'Liver Transplant', hospitalId: '7', 
    description: 'Comprehensive package for living or deceased donor liver transplantation.', cost: 40000, duration: '30-60 days', category: 'Liver Transplant & GI & HPB Surgery',
    details: {
      procedure: "A liver transplant replaces a diseased liver with a healthy liver from another person. It can be a whole liver from a deceased donor or part of a liver from a living donor. It is a life-saving surgery for people with end-stage liver failure. Our partner hospitals have high success rates and dedicated transplant teams.",
      recovery: "Requires a lengthy hospital stay, including time in the ICU. Patients must take immunosuppressants for life to prevent rejection. Our comprehensive care package includes post-discharge accommodation and coordination of regular follow-ups and lab tests to monitor liver function.",
      inclusions: ["Extensive pre-transplant evaluation for recipient and living donor", "Liver transplant surgery", "ICU and hospital stay in a dedicated transplant unit", "All medications during hospital stay", "Post-discharge accommodation for 30 days"],
      exclusions: ["Cost of cadaveric organ, if used", "Post-discharge medications", "Travel costs to and from India"]
    }
  },
  { 
    id: 't11', name: 'IVF Treatment Cycle', hospitalId: '6', 
    description: 'In-vitro fertilization package including consultations, procedures, and monitoring.', cost: 7000, duration: '20-30 days', category: 'IVF, Reproductive Medicine',
    details: {
      procedure: "IVF is a complex series of procedures used to aid fertility. It involves monitoring and stimulating a woman's ovulatory process, removing an ovum or ova from the ovaries and letting sperm fertilise them in a laboratory. The fertilised egg (embryo) is then transferred to the uterus.",
      recovery: "The process is mostly done on an outpatient basis. After the embryo transfer, we advise rest for a day. The hormonal injections can be physically and emotionally demanding, and our team provides supportive counseling throughout the process.",
      inclusions: ["All fertility specialist consultations", "Ovarian stimulation hormones and monitoring scans", "Egg retrieval and fertilization (IVF/ICSI)", "Embryo transfer", "All related lab tests within the cycle"],
      exclusions: ["Donor eggs or sperm, if required", "Pre-implantation Genetic Testing (PGT)", "Embryo freezing and storage", "Travel and accommodation"]
    }
  },
  { 
    id: 't12', name: 'Gastric Bypass Surgery', hospitalId: '7', 
    description: 'Bariatric surgery for weight loss, including dietary counseling.', cost: 10000, duration: '5-7 days', category: 'General & Minimally Invasive Surgery',
    details: {
      procedure: "Gastric bypass, also known as Roux-en-Y gastric bypass, is a type of weight-loss surgery that involves creating a small pouch from the stomach and connecting it directly to the small intestine. This restricts food intake and reduces the absorption of calories, leading to significant weight loss.",
      recovery: "Hospital stay is typically 2-3 days. Patients follow a special diet, starting with liquids and gradually progressing to solid foods. Lifelong commitment to dietary changes and nutritional supplementation is crucial for success. Our package includes extensive counseling to support this new lifestyle.",
      inclusions: ["Bariatric surgeon consultation", "Laparoscopic gastric bypass surgery", "Private hospital room stay", "Nutritional and psychological counseling", "1-year follow-up plan with the surgeon"],
      exclusions: ["Airfare and accommodation", "Post-surgery nutritional supplements", "Any secondary procedures for excess skin removal"]
    }
  },
  { 
    id: 't13', name: 'Cochlear Implant Surgery', hospitalId: '2', 
    description: 'Surgical implantation of a device to restore hearing.', cost: 22000, duration: '4-5 days', category: 'ENT & Cochlear Implant',
    details: {
      procedure: "A cochlear implant is a small, complex electronic device that can help to provide a sense of sound to a person who is profoundly deaf or severely hard-of-hearing. The implant consists of an external portion that sits behind the ear and a second portion that is surgically placed under the skin.",
      recovery: "Hospital stay is usually 1-2 days. The implant is activated a few weeks after surgery. Extensive auditory therapy (rehabilitation) is required to learn to interpret the signals received from the implant as sound. This rehabilitation is a critical part of the process.",
      inclusions: ["High-end cochlear implant device", "Surgical procedure by a senior ENT surgeon", "Hospital stay", "Implant activation and initial mapping sessions", "Initial auditory-verbal therapy sessions"],
      exclusions: ["Long-term auditory therapy", "Travel and accommodation", "Cost of device upgrades in the future"]
    }
  },
  { 
    id: 't14', name: 'Dental Implants (Full Arch)', hospitalId: '2', 
    description: 'Full mouth restoration using All-on-4 or All-on-6 dental implants.', cost: 15000, duration: '7-10 days', category: 'Dentistry',
    details: {
      procedure: "A full arch restoration (like All-on-4®) is a modern solution for patients who have lost most or all of their teeth. It involves surgically placing 4 to 6 titanium implants in the jaw, which then act as anchors for a permanent, non-removable bridge of new, natural-looking teeth. It restores function and aesthetics.",
      recovery: "Some swelling and discomfort are expected for a few days. Patients follow a soft diet for several weeks. A temporary prosthetic is fitted immediately, while the final, permanent bridge is placed after the implants have fully integrated with the jawbone (3-6 months).",
      inclusions: ["All required dental scans (3D CBCT)", "Surgical placement of 4-6 implants", "Immediate temporary prosthetic teeth", "Final permanent zirconia or composite bridge", "All dental consultations and fittings"],
      exclusions: ["Hotel stay and airfare", "Any necessary tooth extractions or bone grafting before the procedure"]
    }
  },
  { 
    id: 't15', name: 'Laparoscopic Hysterectomy', hospitalId: '6',
    description: 'Minimally invasive surgical removal of the uterus.', cost: 9000, duration: '3-5 days', category: 'Obstetrics & Gynaecology',
    details: {
      procedure: "A laparoscopic hysterectomy is a minimally invasive surgery to remove the uterus. Small incisions are made in the abdomen, through which a camera (laparoscope) and surgical instruments are inserted. This approach typically results in less pain, a shorter hospital stay, and a faster recovery compared to traditional open surgery.",
      recovery: "Hospital stay is typically 1-2 days. Most patients can return to normal, light activities within 2-4 weeks, though strenuous activity and heavy lifting should be avoided for about 6 weeks to ensure proper healing. Our team provides clear post-operative instructions.",
      inclusions: ["Gynaecologist and anesthetist fees", "Laparoscopic surgery", "Private hospital room for required stay", "Post-operative care and medication during stay", "Final follow-up consultation before departure"],
      exclusions: ["Pre-operative diagnostic tests if done in home country", "Airfare and accommodation", "Any hormone replacement therapy if needed post-surgery"]
    }
  }
];

export const appointments: Appointment[] = [
    {
        id: 'apt1',
        userId: 'u1',
        hospitalId: '1',
        treatmentName: 'Heart Bypass Surgery Consult',
        date: '2024-09-15T10:00:00Z',
        status: 'Confirmed',
    },
    {
        id: 'apt2',
        userId: 'u1',
        hospitalId: '3',
        treatmentName: 'Knee Pain Evaluation',
        date: '2024-10-02T14:30:00Z',
        status: 'Pending',
    },
];

export const doctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Hitesh Garg',
    hospital: 'Artemis Hospital',
    location: 'Gurugram',
    specialization: 'Spine & Scoliosis Surgery',
    imageUrl: 'https://picsum.photos/seed/hitesh/400/400',
    experience: 20,
    qualifications: ['MBBS', 'MS (Orthopedics)', 'FNB (Spine Surgery)'],
    about: 'Dr. Hitesh Garg is a celebrated spine surgeon with two decades of experience in complex spinal deformities and minimally invasive spine surgery. He is known for his patient-centric approach and excellent outcomes.',
    treatments: ['Spinal Fusion', 'Scoliosis Correction', 'Disc Replacement']
  },
  {
    id: 'd2',
    name: 'Dr. Saurabh Chandra',
    hospital: 'Shallby Sanar International Hospital',
    location: 'Gurugram',
    specialization: 'Cardiology',
    imageUrl: 'https://picsum.photos/seed/saurabh/400/400',
    experience: 15,
    qualifications: ['MBBS', 'MD (Medicine)', 'DM (Cardiology)'],
    about: 'Dr. Saurabh Chandra is an interventional cardiologist renowned for his expertise in complex coronary interventions. He is a leading figure in advanced cardiac procedures and patient care.',
    treatments: ['Angioplasty', 'Stenting', 'Pacemaker Implantation']
  },
  {
    id: 'd3',
    name: 'Dr. Ankit Kumar',
    hospital: 'Shallby Sanar International Hospital',
    location: 'Gurugram',
    specialization: 'Neurology',
    imageUrl: 'https://picsum.photos/seed/ankit/400/400',
    experience: 12,
    qualifications: ['MBBS', 'MD (Medicine)', 'DM (Neurology)'],
    about: 'Dr. Ankit Kumar is a distinguished neurologist with a focus on stroke, epilepsy, and movement disorders. He is dedicated to providing comprehensive neurological care and advancing treatment protocols.',
    treatments: ['Stroke Management', 'Epilepsy Treatment', 'Deep Brain Stimulation (DBS)']
  },
  {
    id: 'd4',
    name: 'Dr. Shailendra Lalwani',
    hospital: 'Shallby Sanar International Hospital',
    location: 'Gurugram',
    specialization: 'Liver Transplant & GI & HPB Surgery',
    imageUrl: 'https://picsum.photos/seed/shailendra/400/400',
    experience: 18,
    qualifications: ['MBBS', 'MS (General Surgery)', 'Fellowship in Liver Transplant'],
    about: 'Dr. Shailendra Lalwani is a leading liver transplant and hepato-pancreato-biliary surgeon. He has performed over 500 liver transplants with excellent success rates.',
    treatments: ['Liver Transplant', 'Pancreatic Surgery', 'Bile Duct Surgery']
  },
  {
    id: 'd5',
    name: 'Dr. Jayant Arora',
    hospital: 'Fortis Memorial Research Institute',
    location: 'Gurugram',
    specialization: 'Orthopedic & Joint Replacement',
    imageUrl: 'https://picsum.photos/seed/jayant/400/400',
    experience: 22,
    qualifications: ['MBBS', 'MS (Orthopedics)', 'Fellowship in Joint Replacement'],
    about: 'Dr. Jayant Arora is a veteran orthopedic surgeon specializing in robotic-assisted joint replacements. He is a pioneer in minimally invasive techniques, ensuring faster recovery for his patients.',
    treatments: ['Robotic Knee Replacement', 'Hip Replacement', 'Shoulder Replacement']
  },
  {
    id: 'd6',
    name: 'Dr. Subhash Jangid',
    hospital: 'Medanta Hospital',
    location: 'Gurugram',
    specialization: 'Orthopedic & Joint Replacement',
    imageUrl: 'https://picsum.photos/seed/subhash/400/400',
    experience: 19,
    qualifications: ['MBBS', 'MS (Orthopedics)', 'M.Ch (Orthopedics)'],
    about: 'Dr. Subhash Jangid is a renowned name in joint replacement surgery. He is known for his expertise in complex primary and revision joint replacement surgeries.',
    treatments: ['Knee Replacement', 'Hip Replacement', 'Arthroscopic Surgery']
  },
  {
    id: 'd7',
    name: 'Dr. SKS Marya',
    hospital: 'Apollo Hospital',
    location: 'New Delhi',
    specialization: 'Orthopedic & Joint Replacement',
    imageUrl: 'https://picsum.photos/seed/marya/400/400',
    experience: 35,
    qualifications: ['MBBS', 'MS (Orthopedics)', 'FRCS (UK)'],
    about: 'A legend in the field of orthopedics, Dr. S.K.S. Marya has performed over 15,000 joint replacement surgeries. He is globally recognized for his contributions to orthopedic surgery.',
    treatments: ['Total Knee Replacement', 'Total Hip Replacement', 'Unicondylar Knee Replacement']
  },
  {
    id: 'd8',
    name: 'Dr. Gaurav Prakash Bhardwaj',
    hospital: 'Apollo Hospital',
    location: 'New Delhi',
    specialization: 'Orthopedic & Joint Replacement',
    imageUrl: 'https://picsum.photos/seed/gaurav/400/400',
    experience: 15,
    qualifications: ['MBBS', 'DNB (Orthopedics)'],
    about: 'Dr. Gaurav Bhardwaj is a dynamic orthopedic surgeon with a special interest in sports injuries and arthroscopic surgery. He has worked with many elite athletes.',
    treatments: ['ACL Reconstruction', 'Meniscus Repair', 'Rotator Cuff Repair']
  },
  {
    id: 'd9',
    name: 'Dr. Hemant Sharma',
    hospital: 'Medanta Hospital',
    location: 'Gurugram',
    specialization: 'Orthopedic & Joint Replacement',
    imageUrl: 'https://picsum.photos/seed/hemant/400/400',
    experience: 25,
    qualifications: ['MBBS', 'MS (Orthopedics)', 'FRCS (Trauma & Orth)'],
    about: 'Dr. Hemant Sharma is an expert in trauma and orthopedic surgery with extensive experience in the UK. He specializes in complex fractures and reconstructive surgery.',
    treatments: ['Complex Trauma Surgery', 'Limb Reconstruction', 'Ilizarov Surgery']
  }
];

export const getHospitalById = (id: string) => hospitals.find(h => h.id === id);
export const getTreatmentsByHospitalId = (hospitalId: string) => treatments.filter(t => t.hospitalId === hospitalId);
export const getTreatmentById = (id: string) => treatments.find(t => t.id === id);
export const getHospitalByTreatmentId = (treatmentId: string) => {
    const treatment = getTreatmentById(treatmentId);
    return treatment ? getHospitalById(treatment.hospitalId) : undefined;
};
