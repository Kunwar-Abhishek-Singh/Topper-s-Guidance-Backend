const express = require ('express');
const router = express.Router();
const dashboard_books = require("../../Controllers/Dashboard/DashboardBooksController");
const dashboard_books_model = require('../../Model/Dashboard_model/dashboard_books_model');
router.get("/dashboard_books",dashboard_books.get_dashboard_books);