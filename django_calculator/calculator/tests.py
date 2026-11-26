from django.test import TestCase
from django.urls import reverse


class CalculatorPageTests(TestCase):
    def test_home_page_renders_calculator_and_static_assets(self):
        response = self.client.get(reverse('calculator:index'))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Casio')
        self.assertContains(response, 'static/calculator/style.css')
        self.assertContains(response, 'static/calculator/script.js')
