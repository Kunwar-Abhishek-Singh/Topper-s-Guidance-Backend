const express = require ('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
require ('./db/mongodb');
const router = require('./routers/AskMeRoute');
const cors = require ('cors');

//const bodyParser = require("body-parser");
const AskmeController = require('./Controllers/AskMeController')
const ToppersGetController = require("./Controllers/ToppersGetController")
const ExamSelectionController = require("./Controllers/ExamSelectionController");
const ExamHeldController = require("./Controllers/ExamHeldController")
const UpcomingWebinarController = require ("./Controllers/UpcomingWebinarController")
const ToppersTipsController = require("./Controllers/TopperTipsController");
const SubheaderController = require("./Controllers/SubHeaderController")
const FaqDataController = require ("./Controllers/FaqDataController");
const PlanStrategyController = require("./Controllers/PlanStrategyController");
const BlogDataController = require("./Controllers/BlogDataController");
const NewsUpdateController = require("./Controllers/NewsUpdateController")
const StudentRegisterController = require("./Controllers/StudentRegisterController");

const { signup_otp_WithMobile } = require('./login/signup-with-mobile');
const { OtpVerify, forgot_password_otp_verify } = require('./login/Otpverify')
const updateOtpController = require("./Controllers/updateOtpController")

const jwt_Authenticate = require("./login/Authentication")


const DashboardGuidanceArticleController = require("./Controllers/Dashboard/DashboardGuidanceArticleController");
const DashboardToppersController = require("./Controllers/Dashboard/DashboardToppersController");
const DashboardBooksController = require("./Controllers/Dashboard/DashboardBooksController");
const DashboardEbooksController = require("./Controllers/Dashboard/DashboardEbooksController");
const DashboardTestSeriesController = require("./Controllers/Dashboard/DashboardTestSeriesController");
const DashboardRelatedPostsController = require("./Controllers/Dashboard/DashboardRelatedPostsController");
const DashboardGuidanceVideosController = require("./Controllers/Dashboard/DashboardGuidanceVideosController");
const DashboardBooksDigitalBooksController = require("./Controllers/Dashboard/DashboardBooksDigitalBooksController");
const DashboardEbooksDigitalBooksPaidController = require("./Controllers/Dashboard/DashboardEbooksDigitalBooksPaidController");
const DashboardEbooksMyNotesFreeController = require("./Controllers/Dashboard/DashboardEbooksMyNotesFreeController");
const DashboardPyqRrbController = require("./Controllers/Dashboard/DashboardPyqRrbController");
const DashboardPyqSscController = require("./Controllers/Dashboard/DashboardPyqSscController");
const DashboardCoursesSelectedCoursesController = require("./Controllers/Dashboard/DashboardCoursesSelectedCoursesController");
const DashboardCoursesPaidController = require("./Controllers/Dashboard/DashboardCoursesPaidController");
const dashboardssctestseries = require("./Controllers/Dashboard/DashboardSscTestSeriesController");
const dashboardsscmocktestseries = require("./Controllers/Dashboard/DashboardSscMockTestSeriesController");
const dashboardrrbtestseries = require("./Controllers/Dashboard/DashboardRrbTestSeriesController");
const dashboardbanktestseries = require("./Controllers/Dashboard/DashboardBankingTestSeriesController");


// var bodyParser = require('body-parser');
const { Login, Logout } = require('./login/Login');
const { UpdatePassword } = require('./login/UpdatePassword');
const PORT = process.env.PORT;
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())
app.use(router)


app.post('/askme', AskmeController.askMe);
app.get('/toppers', ToppersGetController.get_toppers);
app.get('/exam_selection', ExamSelectionController.exam_selection);
app.get('/exam_held_under', ExamHeldController.exam_held_under);
app.get('/upcoming_webinar', UpcomingWebinarController.upcoming_webinar);
app.get('/topper_tips', ToppersTipsController.topper_tips)
app.get('/subheader', SubheaderController.subheader)
app.get('/faq_data', FaqDataController.faq_data);
app.get('/plan_strategy', PlanStrategyController.plan_strategy);
app.get('/blog_data', BlogDataController.blog_data);
app.get('/news_update', NewsUpdateController.news_update);
app.post('/signup',StudentRegisterController.student_register_data);
app.get('/get_regs_details',StudentRegisterController.get_student_register_data );
app.get('/getsingleuser/:email',StudentRegisterController.get_single_user)
app.post('/update_otp', updateOtpController.updateOtp);
app.post('/update_otp_status', updateOtpController.updateOtpStatus)
app.post('/signup_otp_with_mobile', (req, res) =>  signup_otp_WithMobile(req, res))
app.post('/otpverify',(req, res)=> OtpVerify(req, res))
app.post('/forgot_pwd_otp_verify',(req,res)=> forgot_password_otp_verify(req,res))
app.post('/updatepassword',(req,res)=> UpdatePassword(req,res))
// app.get('/login_with_mobile', (req, res) => login)
app.post('/jwt_authenticate',(req, res)=> jwt_Authenticate(req,res))
app.post('/signin',(req,res)=> Login(req,res))
app.post('/signout',(req,res)=> Logout(req,res))






app.get('/guidance_articles', DashboardGuidanceArticleController.get_dashboard_guidance_articles);
app.get('/dashboard_toppers',DashboardToppersController.get_dashboard_toppers);
app.get('/dashboard_books',DashboardBooksController.get_dashboard_books);
app.get('/dashboard_ebooks',DashboardEbooksController.get_dashboard_ebooks);
app.get('/dashboard_test_series',DashboardTestSeriesController.get_dashbaord_test_series);
app.get('/dashboard_related_post',DashboardRelatedPostsController.get_dashboard_related_post);
app.get('/dashboard_guidance_videos',DashboardGuidanceVideosController.get_dashboard_guidance_videos);
app.get('/dashboard_books_digital_books',DashboardBooksDigitalBooksController.get_dashboard_books_digital_books);
app.get('/dashboard_ebooks_digital_books_paid',DashboardEbooksDigitalBooksPaidController.get_dashboard_ebooks_digital_books_paid);
app.get('/dashboard_ebooks_mynote_free',DashboardEbooksMyNotesFreeController.get_Mynotes_Free);
app.get('/dashboardpyqrrb',DashboardPyqRrbController.get_dashboard_pyq_rrb);
app.get('/dashboardpyqssc',DashboardPyqSscController.get_dashboard_pyq_ssc);
app.get('/selectedcourses',DashboardCoursesSelectedCoursesController.get_dashboard_courses_selected_courses);
app.get('/popularcourses',DashboardCoursesPaidController.get_dashboard_courses_paid);
app.get('/dashboardssctestseries',dashboardssctestseries.get_dashboard_ssc_test_series);
app.get('/dashboardsscmocktestseries',dashboardsscmocktestseries.get_dashboard_ssc_mock_test_series);
app.get('/dashboardrrbtestseries',dashboardrrbtestseries.get_dashboard_rrb_test_series);
app.get('/dashboardbanktestseries',dashboardbanktestseries.get_Dashboard_Bank_test_series);



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})