# from google import genai
# from google.genai import types

# client=genai.Client()

# response = client.models.generate_content(
#     model="gemini-2.5-flash",
#     config=types.GenerateContentConfig(system_instruction="You are required to generate a abstract on the project title given by the user. Give the abstract in from of three paragraphs of maximum 200 words each if the user doesnt specify."),
#     contents=["Drone delivery"]
# )
# print(response.text)
