const express = require ('express');
const router = express.Router();
const dashboard_books_digital_books = require("../../Controllers/Dashboard/DashboardBooksDigitalBooksController");
const dashboard_books_digital_books_model = require("../../Model/Dashboard_model/Dashboard_books_digital_books_model");

router.get("dashboard_books_digital_books",dashboard_books_digital_books.get_dashboard_books_digital_books);