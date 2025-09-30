// Python for AI - Content Data
const contentData = {
    // Navigation and basic content
    navigation: {
        logo: "Python for AI",
        menuItems: [
            { id: "history", en: "History", zh: "历史" },
            { id: "comparison", en: "Comparison", zh: "对比" },
            { id: "libraries", en: "AI Libraries", zh: "AI库" },
            { id: "tips", en: "Syntax Challenges", zh: "语法难点" }
        ]
    },

    // Section titles
    sectionTitles: {
        history: { en: "Python's Journey to AI Dominance", zh: "Python的AI霸主之路" },
        comparison: { en: "Python vs Other Languages for AI", zh: "Python与其他AI语言对比" },
        libraries: { en: "Essential AI & Data Science Libraries", zh: "核心AI和数据科学库" },
        syntax: { en: "Python Syntax Challenges for AI Students", zh: "AI学生的Python语法难点" },


        toc: { en: "Table of Contents", zh: "目录" }
    },

    // Footer content
    footer: {
        text1: { en: "&copy; 2025 Algonquin College AI Course - Python for AI Journey", zh: "&copy; 2025 亚岗昆学院AI课程 - Python与AI之旅" },
        text2: { en: "Learning Python Through History and Stories for Artificial Intelligence", zh: "通过历史和故事学习Python人工智能" }
    },

    // Hero section
    hero: {
        title: { en: "Python for AI", zh: "Python与人工智能" },
        subtitle: { en: "From History to AI Applications - Algonquin College AI Course", zh: "从历史到AI应用 - 亚岗昆学院AI课程" },
        stats: [
            { number: "1991", label: { en: "Python Birth Year", zh: "Python诞生年" } },
            { number: "5", label: { en: "Core AI Libraries", zh: "核心AI库" } },
            { number: "#1", label: { en: "AI Language Choice", zh: "AI语言首选" } }
        ]
    },

    // Timeline data
    timeline: [
        {
            year: "1991",
            title: { en: "Birth of Python", zh: "Python诞生" },
            description: { en: "Guido van Rossum created Python in the Netherlands", zh: "Guido van Rossum在荷兰创造了Python" },
            story: {
                icon: "🎭",
                title: { en: "The Monty Python Connection", zh: "Monty Python的联系" },
                content: { 
                    en: "Python wasn't named after the snake 🐍, but after the British comedy group <strong>Monty Python's Flying Circus</strong>! Guido van Rossum was reading scripts from the show during Python's development in December 1989. He wanted a name that was \"short, unique, and slightly mysterious\" - and what could be more mysterious than a dead parrot sketch? 🦜<br><br><strong>Fun fact:</strong> The Python documentation still contains many Monty Python references, including examples with \"spam\", \"eggs\", and \"Brian\"!",
                    zh: "Python不是以蛇🐍命名的，而是以英国喜剧团体Monty Python飞行马戏团命名！Guido van Rossum在1989年12月Python开发期间正在阅读该节目的剧本。他想要一个'简短、独特且略显神秘'的名字——还有什么比死鹦鹉小品更神秘的呢？🦜<br><br>有趣的事实：Python文档仍然包含许多Monty Python的引用，包括'spam'、'eggs'和'Brian'的例子！"
                }
            }
        },
        {
            year: "2001",
            title: { en: "NumPy Foundation Era", zh: "NumPy基础时代" },
            description: { en: "Scientific computing capabilities emerged with the NumPy project", zh: "NumPy项目使科学计算能力得以涌现" },
            story: {
                icon: "🔬",
                title: { en: "The Scientific Revolution Begins", zh: "科学革命的开端" },
                content: {
                    en: "In 2001, a group of scientists were frustrated with MATLAB's licensing costs and limitations. Led by Travis Oliphant, they began developing Numeric (NumPy's predecessor). This was the moment Python stopped being \"just a scripting language\" and became a serious tool for scientific computing.<br><br><strong>The breakthrough:</strong> Multi-dimensional arrays that were fast enough to compete with C and Fortran! 🚀 Universities started teaching Python instead of MATLAB - saving millions in licensing fees.",
                    zh: "2001年，一群科学家对MATLAB的许可成本和限制感到沮丧。在Travis Oliphant的带领下，他们开始开发Numeric（NumPy的前身）。这是Python从'仅仅是脚本语言'转变为科学计算严肃工具的时刻。<br><br>突破：多维数组足够快，可以与C和Fortran竞争！🚀 大学开始教授Python而不是MATLAB——节省了数百万的许可费用。"
                }
            }
        },
        {
            year: "2010",
            title: { en: "The Big Data & ML Explosion", zh: "大数据与机器学习爆发" },
            description: { en: "Machine learning libraries and data science ecosystems drove Python's meteoric rise", zh: "机器学习库和数据科学生态系统推动了Python的快速崛起" },
            story: {
                icon: "📊",
                title: { en: "When Netflix Changed Everything", zh: "当Netflix改变一切时" },
                content: {
                    en: "2010 was the year Netflix launched their recommendation algorithm competition, offering $1 million prize. Guess what language most winners used? Python! The pandas library (created by Wes McKinney at AQR Capital) made data manipulation so easy that data scientists flocked to Python.<br><br><strong>Meanwhile,</strong> scikit-learn was born at INRIA France, giving everyone access to machine learning algorithms. Suddenly, a biology student could build a classifier in 10 lines of code! 🧬",
                    zh: "2010年是Netflix推出推荐算法竞赛的一年，提供100万美元奖金。猜猜大多数获胜者使用什么语言？Python！pandas库（由AQR Capital的Wes McKinney创建）使数据处理变得如此简单，数据科学家纷纷转向Python。<br><br>与此同时，scikit-learn在法国INRIA诞生，让每个人都能使用机器学习算法。突然间，生物学学生可以用10行代码构建分类器！🧬"
                }
            }
        },
        {
            year: "2017",
            title: { en: "The AI Gold Rush", zh: "AI淘金热" },
            description: { en: "Deep learning explosion - TensorFlow and PyTorch emerge, making Python the AI language of choice", zh: "深度学习爆发——TensorFlow和PyTorch出现，使Python成为AI语言的首选" },
            story: {
                icon: "🚀",
                title: { en: "The Perfect Storm", zh: "完美风暴" },
                content: {
                    en: "Three things happened simultaneously: GPUs became powerful enough for deep learning, Google released TensorFlow, and Python's simple syntax made AI accessible to non-CS experts. Suddenly, biologists, economists, and artists could build neural networks!",
                    zh: "三件事同时发生：GPU变得足够强大以支持深度学习，Google发布了TensorFlow，Python的简单语法让非计算机专家也能接触AI。突然间，生物学家、经济学家和艺术家都能构建神经网络了！"
                }
            }
        },
        {
            year: "2024",
            title: { en: "AI Language Leader", zh: "AI语言领导者" },
            description: { en: "Python dominates AI, machine learning, and data science worldwide", zh: "Python在全球AI、机器学习和数据科学领域占据主导地位" },
            story: {
                icon: "👑",
                title: { en: "The Undisputed Champion", zh: "无可争议的冠军" },
                content: {
                    en: "Today, Python powers ChatGPT, Tesla's autopilot, Netflix recommendations, and even the algorithms that might have recommended this course to you! From a Christmas hobby project to running the world's AI - that's quite a journey!",
                    zh: "今天，Python驱动着ChatGPT、特斯拉的自动驾驶、Netflix推荐，甚至可能向您推荐这门课程的算法！从圣诞节的业余项目到运行世界的AI——这真是一段了不起的旅程！"
                }
            }
        }
    ],

    // Language comparison data
    languageComparison: [
        {
            id: "python",
            name: { en: "Python 🐍", zh: "Python 🐍" },
            description: { en: "The AI superstar! 🌟", zh: "AI超级明星！🌟" },
            code: { 
                en: `# Python - The AI superstar! 🌟
data = [1, 2, 3, 4, 5]
squared = [x**2 for x in data]
print(squared)  # [1, 4, 9, 16, 25]

# Machine Learning in 3 lines! 🤯
import pandas as pd
df = pd.read_csv('data.csv')
model.fit(df)  # Done! 🎉

# Compare this simplicity to other languages... 👇`,
                zh: `# Python - AI超级明星！🌟
data = [1, 2, 3, 4, 5]
squared = [x**2 for x in data]
print(squared)  # [1, 4, 9, 16, 25]

# 3行代码搞定机器学习！🤯
import pandas as pd
df = pd.read_csv('data.csv')
model.fit(df)  # 完成！🎉

# 对比其他语言的复杂性... 👇`
            },
            features: [
                { type: "pro", text: { en: "✅ Super readable", zh: "✅ 超级易读" } },
                { type: "pro", text: { en: "✅ Huge AI ecosystem", zh: "✅ 庞大AI生态系统" } },
                { type: "pro", text: { en: "✅ Fast prototyping", zh: "✅ 快速原型" } },
                { type: "pro", text: { en: "✅ Easy to learn", zh: "✅ 易于学习" } },
                { type: "con", text: { en: "⚠️ Can be slow", zh: "⚠️ 可能较慢" } }
            ]
        },
        {
            id: "java",
            name: { en: "Java ☕", zh: "Java ☕" },
            description: { en: "Same task in Java... 😅", zh: "Java中的相同任务... 😅" },
            code: {
                en: `// Same task in Java... 😅
import java.util.Arrays;
import java.util.stream.IntStream;

public class ArrayExample {
    public static void main(String[] args) {
        int[] data = {1, 2, 3, 4, 5};
        int[] squared = Arrays.stream(data)
            .map(x -> x * x)
            .toArray();
        System.out.println(Arrays.toString(squared));
        
        // For ML? You'll need Weka, DL4J, Maven...
        // 50+ lines just for setup! 😰
        // Still haven't written ML code yet!
    }
}`,
                zh: `// Java完成相同任务... 😅
import java.util.Arrays;
import java.util.stream.IntStream;

public class ArrayExample {
    public static void main(String[] args) {
        int[] data = {1, 2, 3, 4, 5};
        int[] squared = Arrays.stream(data)
            .map(x -> x * x)
            .toArray();
        System.out.println(Arrays.toString(squared));
        
        // 机器学习？你需要Weka、DL4J、Maven...
        // 仅仅配置就需要50多行！😰
        // 还没开始写ML代码呢！
    }
}`
            },
            features: [
                { type: "con", text: { en: "⚠️ Verbose syntax", zh: "⚠️ 冗长的语法" } },
                { type: "con", text: { en: "⚠️ Complex for AI/ML", zh: "⚠️ AI/ML复杂" } },
                { type: "con", text: { en: "⚠️ Slower development", zh: "⚠️ 开发较慢" } },
                { type: "pro", text: { en: "✅ Enterprise-grade", zh: "✅ 企业级" } },
                { type: "con", text: { en: "⚠️ Limited AI libraries", zh: "⚠️ AI库有限" } }
            ]
        },
        {
            id: "cpp",
            name: { en: "C++ ⚡", zh: "C++ ⚡" },
            description: { en: "C++ for the same task... 😰", zh: "C++完成相同任务... 😰" },
            code: {
                en: `// C++ for the same task... 😰
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>

int main() {
    std::vector<int> data = {1, 2, 3, 4, 5};
    std::vector<int> squared;
    
    std::transform(data.begin(), data.end(),
        std::back_inserter(squared),
        [](int x) { return x * x; });
    
    // Print results... (still going)
    for(const auto& x : squared) {
        std::cout << x << " ";
    }
    std::cout << std::endl;
    
    // ML? Good luck with that! 💀
    return 0;
}`,
                zh: `// C++完成相同任务... 😰
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>

int main() {
    std::vector<int> data = {1, 2, 3, 4, 5};
    std::vector<int> squared;
    
    std::transform(data.begin(), data.end(),
        std::back_inserter(squared),
        [](int x) { return x * x; });
    
    // 打印结果...（还在继续）
    for(const auto& x : squared) {
        std::cout << x << " ";
    }
    std::cout << std::endl;
    
    // 机器学习？祝你好运！💀
    return 0;
}`
            },
            features: [
                { type: "pro", text: { en: "✅ Lightning fast", zh: "✅ 闪电般快速" } },
                { type: "con", text: { en: "⚠️ Memory management", zh: "⚠️ 内存管理" } },
                { type: "con", text: { en: "⚠️ Steep learning curve", zh: "⚠️ 学习曲线陡峭" } },
                { type: "con", text: { en: "⚠️ Complex syntax", zh: "⚠️ 复杂语法" } },
                { type: "con", text: { en: "⚠️ Slow prototyping", zh: "⚠️ 原型开发慢" } }
            ]
        },
        {
            id: "javascript",
            name: { en: "JavaScript 🌐", zh: "JavaScript 🌐" },
            description: { en: "JavaScript trying to be Python... 🤔", zh: "JavaScript试图成为Python... 🤔" },
            code: {
                en: `// JavaScript trying to be Python... 🤔
const data = [1, 2, 3, 4, 5];
const squared = data.map(x => x * x);
console.log(squared); // [1, 4, 9, 16, 25]

// For ML, you need TensorFlow.js 📦
// But it's... not quite the same 😅
const tf = require('@tensorflow/tfjs-node');
// Still need lots of setup for simple tasks
// And performance? Well... 🐌`,
                zh: `// JavaScript试图成为Python... 🤔
const data = [1, 2, 3, 4, 5];
const squared = data.map(x => x * x);
console.log(squared); // [1, 4, 9, 16, 25]

// 机器学习需要TensorFlow.js 📦
// 但是...感觉不太一样 😅
const tf = require('@tensorflow/tfjs-node');
// 简单任务仍需要大量配置
// 性能？嗯... 🐌`
            },
            features: [
                { type: "pro", text: { en: "✅ Web integration", zh: "✅ Web集成" } },
                { type: "con", text: { en: "⚠️ Limited AI ecosystem", zh: "⚠️ AI生态系统有限" } },
                { type: "con", text: { en: "⚠️ Type confusion", zh: "⚠️ 类型混乱" } },
                { type: "con", text: { en: "⚠️ Not ML-focused", zh: "⚠️ 非ML专注" } }
            ]
        }
    ],

    // Indentation story
    indentationStory: {
        icon: "😅",
        title: { en: "The Great Indentation Wars", zh: "伟大的缩进战争" },
        content: {
            en: "The most legendary Python beginner mistake: <strong>One wrong indent can destroy everything!</strong> Unlike other languages with curly braces {}, Python uses indentation for code structure. This was Guido's controversial choice - he wanted code that \"looked like pseudocode.\"<br><br><strong>Horror stories from Algonquin students:</strong> \"I spent 3 hours debugging... it was ONE missing space!\" 最佳实践: Configure your IDE to show whitespace. Many coding careers have been saved! 🔍",
            zh: "最传奇的Python初学者错误：一个错误的缩进就能毁掉一切！与其他使用花括号{}的语言不同，Python使用缩进来表示代码结构。这是Guido有争议的选择——他希望代码'看起来像伪代码'。<br><br>亚岗昆学生的恐怖故事：'我花了3小时调试...结果是少了一个空格！'最佳实践：配置IDE显示空白字符。拯救了许多编程生涯！🔍"
        },
        errorCode: {
            en: `# This breaks Python:
# if True:
#     print("correct indent")
#    print("wrong indent!")  # One space less = Error!`,
            zh: `# 这会破坏Python代码：
# if True:
#     print("正确缩进")
#    print("错误缩进!")  # 少一个空格 = 错误！`
        }
    },

    // AI Libraries data
    aiLibraries: [
        {
            id: "numpy",
            name: { en: "NumPy - The Foundation", zh: "NumPy - 基础" },
            description: { en: "High-performance arrays and mathematical operations - the backbone of Python AI", zh: "高性能数组和数学运算——Python AI的基础" },
            whyImportant: { en: "Every AI library builds on NumPy. Without it, no TensorFlow, no PyTorch, no pandas!", zh: "每个AI库都建立在NumPy之上。没有它，就没有TensorFlow、PyTorch、pandas！" },
            logo: "assets/numpy-logo.svg",
            code: {
                en: `# NumPy Magic in Action! ✨
import numpy as np

# Create arrays
data = np.array([[1, 2, 3], [4, 5, 6]])
print("Original:", data)

# Vectorized operations (super fast!)
squared = data ** 2
print("Squared:", squared)

# Mathematical functions
result = np.mean(data, axis=0)
print("Column means:", result)

# Linear algebra made easy
matrix_a = np.array([[1, 2], [3, 4]])
matrix_b = np.array([[5, 6], [7, 8]])
product = np.dot(matrix_a, matrix_b)
print("Matrix multiplication:", product)

# Statistical operations
print("Standard deviation:", np.std(data))
print("Correlation:", np.corrcoef(data[0], data[1]))`,
                zh: `# NumPy魔法演示！✨
import numpy as np

# 创建数组
data = np.array([[1, 2, 3], [4, 5, 6]])
print("原始数据:", data)

# 向量化操作（超快！）
squared = data ** 2
print("平方:", squared)

# 数学函数
result = np.mean(data, axis=0)
print("列均值:", result)

# 线性代数简化
matrix_a = np.array([[1, 2], [3, 4]])
matrix_b = np.array([[5, 6], [7, 8]])
product = np.dot(matrix_a, matrix_b)
print("矩阵乘法:", product)

# 统计操作
print("标准差:", np.std(data))
print("相关性:", np.corrcoef(data[0], data[1]))`
            }
        },
        {
            id: "pandas",
            name: { en: "Pandas - Data Powerhouse", zh: "Pandas - 数据强者" },
            description: { en: "Excel on steroids! Clean, transform, and analyze data with ease", zh: "超强Excel！轻松清理、转换和分析数据" },
            whyImportant: { en: "90% of AI work is data preparation. Pandas makes it 10x faster than Excel!", zh: "90%的AI工作是数据准备。Pandas比Excel快10倍！" },
            logo: "assets/pandas-logo.svg",
            code: {
                en: `# Pandas: Making Data Dance! 💃
import pandas as pd

# Create a DataFrame (like Excel sheet)
data = {
    'Student': ['Alice', 'Bob', 'Carol', 'David'],
    'AI_Score': [95, 87, 92, 89],
    'Python_Score': [88, 94, 90, 86],
    'Year': [2023, 2024, 2023, 2024]
}
df = pd.DataFrame(data)
print("Original Data:")
print(df)

# Filter data
algonquin_2024 = df[df['Year'] == 2024]
print("\\n2024 Students:")
print(algonquin_2024)

# Calculate statistics
avg_scores = df[['AI_Score', 'Python_Score']].mean()
print("\\nAverage Scores:")
print(avg_scores)

# Group and analyze
yearly_stats = df.groupby('Year').mean()
print("\\nYearly Statistics:")
print(yearly_stats)`,
                zh: `# Pandas：让数据起舞！💃
import pandas as pd

# 创建数据框（类似Excel表格）
data = {
    'Student': ['Alice', 'Bob', 'Carol', 'David'],
    'AI_Score': [95, 87, 92, 89],
    'Python_Score': [88, 94, 90, 86],
    'Year': [2023, 2024, 2023, 2024]
}
df = pd.DataFrame(data)
print("原始数据:")
print(df)

# 过滤数据
algonquin_2024 = df[df['Year'] == 2024]
print("\\n2024年学生:")
print(algonquin_2024)

# 计算统计信息
avg_scores = df[['AI_Score', 'Python_Score']].mean()
print("\\n平均分数:")
print(avg_scores)

# 分组分析
yearly_stats = df.groupby('Year').mean()
print("\\n年度统计:")
print(yearly_stats)`
            }
        },
        {
            id: "tensorflow",
            name: { en: "TensorFlow - Google's AI Engine", zh: "TensorFlow - 谷歌AI引擎" },
            description: { en: "Build neural networks and deep learning models like Google! From image recognition to chatbots", zh: "像Google一样构建神经网络和深度学习模型！从图像识别到聊天机器人" },
            whyImportant: { en: "Powers Google Search, Gmail, YouTube. The most popular deep learning framework!", zh: "驱动Google搜索、Gmail、YouTube。最受欢迎的深度学习框架！" },
            logo: "assets/tensorflow-logo.svg",
            code: {
                en: `# Deep Learning in 15 Lines! 🧠
import tensorflow as tf
from tensorflow import keras
import numpy as np

# Create sample data (student grades prediction)
X = np.random.random((1000, 10))  # 10 features
y = np.random.randint(0, 2, (1000, 1))  # Pass/Fail

# Build a neural network
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(10,)),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')
])

# Compile the model
model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# Train the model
history = model.fit(X, y, epochs=10, batch_size=32, 
                   validation_split=0.2, verbose=0)

print(f"Final accuracy: {history.history['accuracy'][-1]:.2%}")
print("You just built a neural network! 🚀")`,
                zh: `# 15行搞定深度学习！🧠
import tensorflow as tf
from tensorflow import keras
import numpy as np

# 创建样本数据（学生成绩预测）
X = np.random.random((1000, 10))  # 10个特征
y = np.random.randint(0, 2, (1000, 1))  # 及格/不及格

# 构建神经网络
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(10,)),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')
])

# 编译模型
model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# 训练模型
history = model.fit(X, y, epochs=10, batch_size=32, 
                   validation_split=0.2, verbose=0)

print(f"最终准确率: {history.history['accuracy'][-1]:.2%}")
print("你刚刚构建了一个神经网络！🚀")`
            }
        },
        {
            id: "pytorch",
            name: { en: "PyTorch - Facebook's AI Lab", zh: "PyTorch - Facebook AI实验室" },
            description: { en: "Dynamic neural networks that think like you do! More intuitive than TensorFlow for research", zh: "像你一样思考的动态神经网络！比TensorFlow更直观的研究工具" },
            whyImportant: { en: "Preferred by researchers at Stanford, MIT. Powers Facebook's AI and Instagram filters!", zh: "斯坦福、MIT研究者的首选。驱动Facebook AI和Instagram滤镜！" },
            logo: "assets/pytorch-logo.svg",
            code: {
                en: `# PyTorch: AI Research Made Easy! ⚡
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np

# Create sample data
X = torch.randn(1000, 10)  # Random features
y = torch.randint(0, 2, (1000,)).float()  # Binary labels

# Define a simple neural network
class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(10, 64)
        self.fc2 = nn.Linear(64, 32)
        self.fc3 = nn.Linear(32, 1)
        self.relu = nn.ReLU()
        self.sigmoid = nn.Sigmoid()
        
    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.sigmoid(self.fc3(x))
        return x

# Initialize model and optimizer
model = SimpleNet()
optimizer = optim.Adam(model.parameters(), lr=0.001)
criterion = nn.BCELoss()

print("PyTorch model created!")
print(f"Model parameters: {sum(p.numel() for p in model.parameters())}")
print("Ready for training! 🔥")`,
                zh: `# PyTorch：AI研究变简单！⚡
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np

# 创建样本数据
X = torch.randn(1000, 10)  # 随机特征
y = torch.randint(0, 2, (1000,)).float()  # 二分类标签

# 定义简单神经网络
class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(10, 64)
        self.fc2 = nn.Linear(64, 32)
        self.fc3 = nn.Linear(32, 1)
        self.relu = nn.ReLU()
        self.sigmoid = nn.Sigmoid()
        
    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.sigmoid(self.fc3(x))
        return x

# 初始化模型和优化器
model = SimpleNet()
optimizer = optim.Adam(model.parameters(), lr=0.001)
criterion = nn.BCELoss()

print("PyTorch模型已创建！")
print(f"模型参数量: {sum(p.numel() for p in model.parameters())}")
print("准备开始训练！🔥")`
            }
        },
        {
            id: "openai",
            name: { en: "OpenAI API - ChatGPT Power", zh: "OpenAI API - ChatGPT能力" },
            description: { en: "Build AI apps with ChatGPT's brain! Create chatbots, content generators, and AI assistants", zh: "用ChatGPT的大脑构建AI应用！创建聊天机器人、内容生成器和AI助手" },
            whyImportant: { en: "Skip years of AI training! Use the world's most advanced AI models instantly!", zh: "跳过多年AI训练！立即使用世界最先进的AI模型！" },
            logo: "assets/openai-logo.svg",
            code: {
                en: `# Build Your Own AI Assistant! 🤖
import openai

# Set up OpenAI (get free API key at openai.com)
openai.api_key = "your-api-key-here"

def ai_tutor(question):
    """AI tutor for Algonquin students"""
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": """You are a helpful AI tutor 
             for Algonquin College students. Explain concepts clearly 
             with practical examples."""},
            {"role": "user", "content": question}
        ],
        max_tokens=200,
        temperature=0.7
    )
    return response.choices[0].message.content

# Example usage
questions = [
    "What is machine learning?",
    "How do I debug Python code?",
    "Explain neural networks simply"
]

for q in questions:
    print(f"Question: {q}")
    print(f"AI Tutor: {ai_tutor(q)}")
    print("-" * 50)

print("Your personal AI tutor is ready! 🎓")`,
                zh: `# 构建你的AI助手！🤖
import openai

# 设置OpenAI（在openai.com获取免费API密钥）
openai.api_key = "your-api-key-here"

def ai_tutor(question):
    """亚岗昆学生的AI导师"""
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": """你是亚岗昆学院学生的
             有用AI导师。用实际例子清楚地解释概念。"""},
            {"role": "user", "content": question}
        ],
        max_tokens=200,
        temperature=0.7
    )
    return response.choices[0].message.content

# 使用示例
questions = [
    "什么是机器学习？",
    "如何调试Python代码？",
    "简单解释神经网络"
]

for q in questions:
    print(f"问题: {q}")
    print(f"AI导师: {ai_tutor(q)}")
    print("-" * 50)

print("你的个人AI导师准备就绪！🎓")`
            }
        },
        {
            id: "scikit",
            name: { en: "Scikit-learn - ML for Everyone", zh: "Scikit-learn - 人人机器学习" },
            description: { en: "Machine Learning made simple! Build predictive models without a PhD in mathematics", zh: "机器学习变简单！无需数学博士学位就能构建预测模型" },
            whyImportant: { en: "Perfect for beginners! Used by Netflix, Spotify, and Airbnb for recommendations!", zh: "初学者完美选择！被Netflix、Spotify和Airbnb用于推荐系统！" },
            logo: "assets/sklearn-logo.svg",
            code: {
                en: `# AI Model in 10 Lines! 🤖
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
from sklearn.metrics import accuracy_score, classification_report

# Generate sample data (student success prediction)
X, y = make_classification(n_samples=1000, n_features=8, 
                          n_classes=2, random_state=42)

# Split into training and testing
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Create and train AI model (Random Forest)
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)

print(f"AI Model Accuracy: {accuracy:.2%}")
print("Feature Importance:", model.feature_importances_[:3])
print("Congratulations! You just built an AI model! 🎉")`,
                zh: `# 10行搞定AI模型！🤖
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
from sklearn.metrics import accuracy_score, classification_report

# 生成样本数据（学生成功预测）
X, y = make_classification(n_samples=1000, n_features=8, 
                          n_classes=2, random_state=42)

# 分割训练和测试数据
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# 创建和训练AI模型（随机森林）
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 进行预测
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)

print(f"AI模型准确率: {accuracy:.2%}")
print("特征重要性:", model.feature_importances_[:3])
print("恭喜！你刚刚构建了一个AI模型！🎉")`
            }
        }
    ],

    // Text labels for various components
    labels: {
        importantNote: { en: "Why Important?", zh: "为什么重要？" }
    },

    // Syntax challenges with full content
    syntaxChallenges: [
        {
            id: "indentation",
            title: { 
                en: "⚠️ Indentation Nightmare", 
                zh: "⚠️ 缩进噩梦" 
            },
            subtitle: { 
                en: "The Most Common Python Trap", 
                zh: "最常见的Python陷阱" 
            },
            description: { 
                en: "Python uses indentation instead of {} to define code blocks - 90% of beginners struggle with this! 😱", 
                zh: "Python使用缩进而不是{}来定义代码块 - 90%的初学者都会在这里栽跟头！😱" 
            },
            badExample: {
                en: `# ❌ This will cause IndentationError
# if True:
#     print("Missing indentation!")  # ERROR!
#       print("Inconsistent!")     # ERROR!

# ❌ Mixed tabs and spaces (invisible nightmare!)
# def calculate():
#     x = 1  # 4 spaces
# 	y = 2  # tab character - ERROR!
#     return x + y`,
                zh: `# ❌ 这会导致缩进错误
# if True:
#     print("缺少缩进!")  # 错误!
#     print("不一致!")     # 错误!

# ❌ 混合制表符和空格（看不见的噩梦！）
# def calculate():
#     x = 1  # 4个空格
# 	y = 2  # 制表符 - 错误!
#     return x + y`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Use 4 spaces consistently
# if True:
#     print("Correct indentation!")
#     if True:
#         print("Nested levels!")

# Configure IDE: Show whitespace
# def calculate():
#     return 1 + 2  # Clean and simple`,
                zh: `# ✅ 最佳实践：一致使用4个空格
# if True:
#     print("正确缩进！")
#     if True:
#         print("嵌套层级！")

# IDE配置：显示空白字符
# def calculate():
#     return 1 + 2  # 简洁明了`
            },
            tips: [
                { 
                    en: "💡 Always use 4 spaces for indentation\n\n```python\ndef my_function():\n    if True:\n        print('Properly indented!')\n```", 
                    zh: "💡 始终使用4个空格进行缩进\n\n```python\ndef my_function():\n    if True:\n        print('正确缩进！')\n```" 
                },
                { 
                    en: "💡 Configure editor to show whitespace\n\n```\n# In VS Code: View > Render Whitespace\n# Helps catch invisible indentation errors\n```", 
                    zh: "💡 配置编辑器显示空白字符\n\n```\n# 在VS Code中：查看 > 呈现空白字符\n# 有助于发现不可见的缩进错误\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• Python uses indentation instead of {} to define code blocks\n• Always use 4 spaces consistently and configure your editor to show whitespace\n• This is the #1 beginner mistake that causes hours of debugging!",
                zh: "🎯 **核心要点**：\n• Python用缩进而非{}定义代码块\n• 始终一致使用4个空格并配置编辑器显示空白字符\n• 这是初学者第一大错误，会导致数小时调试！"
            }
        },
        {
            id: "listcomp",
            title: { en: "🧠 List Comprehensions", zh: "🧠 列表推导式" },
            subtitle: { en: "Pythonic Code That Looks Like Math", zh: "看起来像数学的Python代码" },
            description: { en: "Python's one-line list creation syntax - used everywhere in AI/ML code! 🤯", zh: "Python的一行列表创建语法 - 在AI/ML代码中无处不在！🤯" },
            badExample: {
                en: `# ❌ The verbose way
numbers = [1, 2, 3, 4, 5]
squares = []
for num in numbers:
    if num % 2 == 0:
        squares.append(num ** 2)

# ❌ Too complex (hard to read)
result = [x**2 if x > 3 else x for x in range(10) if x % 2 == 0]`,
                zh: `# ❌ 冗长的方式
numbers = [1, 2, 3, 4, 5]
squares = []
for num in numbers:
    if num % 2 == 0:
        squares.append(num ** 2)

# ❌ 过于复杂（难以阅读）
result = [x**2 if x > 3 else x for x in range(10) if x % 2 == 0]`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Clean data transformations
data = [1, 2, 3, 4, 5]
squares = [x**2 for x in data]

# Data cleaning
scores = [85, 92, 78, 96, 89]
passed = [s for s in scores if s >= 80]

# AI preprocessing
texts = ["Hello World", "Python AI"]
tokens = [t.lower().split() for t in texts]`,
                zh: `# ✅ 最佳实践：简洁的数据转换
data = [1, 2, 3, 4, 5]
squares = [x**2 for x in data]

# 数据清洗
scores = [85, 92, 78, 96, 89]
passed = [s for s in scores if s >= 80]

# AI预处理
texts = ["Hello World", "Python AI"]
tokens = [t.lower().split() for t in texts]`
            },
            tips: [
                { 
                    en: "💡 Simple transformation pattern\n\n```python\nnumbers = [1, 2, 3, 4, 5]\nsquared = [x**2 for x in numbers]\n```", 
                    zh: "💡 简单转换模式\n\n```python\nnumbers = [1, 2, 3, 4, 5]\nsquared = [x**2 for x in numbers]\n```" 
                },
                { 
                    en: "💡 Filter and transform in one line\n\n```python\ndata = [1, 2, 3, 4, 5, 6]\neven_squares = [x**2 for x in data if x % 2 == 0]\n```", 
                    zh: "💡 一行代码过滤和转换\n\n```python\ndata = [1, 2, 3, 4, 5, 6]\neven_squares = [x**2 for x in data if x % 2 == 0]\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• List comprehensions are Python's elegant one-line way to create lists\n• They're faster than loops and essential for AI/ML data preprocessing\n• Pattern: `[expression for item in iterable if condition]` - keep them simple!",
                zh: "🎯 **核心要点**：\n• 列表推导式是Python优雅的一行创建列表方式\n• 比循环更快，AI/ML数据预处理必备\n• 模式：`[表达式 for 项目 in 可迭代对象 if 条件]` - 保持简洁！"
            }
        },
        {
            id: "exceptions",
            title: { en: "🛡️ Exception Handling", zh: "🛡️ 异常处理" },
            subtitle: { en: "When Things Go Wrong (And They Will)", zh: "当事情出错时（而且一定会出错）" },
            description: { en: "Handle errors gracefully with try/except - essential for production AI systems! 🚨", zh: "用try/except优雅地处理错误 - 对生产AI系统至关重要！🚨" },
            badExample: {
                en: `# ❌ No error handling (will crash)
def load_model(file_path):
    with open(file_path, 'rb') as f:
        model = pickle.load(f)
    return model

# ❌ Catching everything (hides problems)
try:
    result = risky_operation()
except:
    pass  # Silent failure!

# ❌ Wrong exception type
try:
    age = int(input("Enter age: "))
except FileNotFoundError:  # This won't happen for int()!
    print("File not found")`,
                zh: `# ❌ 没有错误处理（会崩溃）
def load_model(file_path):
    with open(file_path, 'rb') as f:
        model = pickle.load(f)
    return model

# ❌ 捕获所有异常（隐藏问题）
try:
    result = risky_operation()
except:
    pass  # 静默失败！

# ❌ 错误的异常类型
try:
    age = int(input("Enter age: "))
except FileNotFoundError:  # int()不会发生这个错误！
    print("文件未找到")`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Specific exception handling
def load_data(file_path):
    try:
        return pd.read_csv(file_path)
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        return None
    except pd.errors.EmptyDataError:
        print("File is empty")
        return None

# Data validation
def validate_score(score):
    try:
        value = float(score)
        return 0 <= value <= 100
    except ValueError:
        return False

# Model training protection
def train_safely(model, data):
    try:
        model.fit(data)
    except Exception as e:
        print(f"Training failed: {e}")
        raise`,
                zh: `# ✅ 最佳实践：具体异常处理
def load_data(file_path):
    try:
        return pd.read_csv(file_path)
    except FileNotFoundError:
        print(f"文件未找到: {file_path}")
        return None
    except pd.errors.EmptyDataError:
        print("文件为空")
        return None

# 数据验证
def validate_score(score):
    try:
        value = float(score)
        return 0 <= value <= 100
    except ValueError:
        return False

# 模型训练保护
def train_safely(model, data):
    try:
        model.fit(data)
    except Exception as e:
        print(f"训练失败: {e}")
        raise`
            },
            tips: [
                { 
                    en: "💡 Catch specific exception types\n\n```python\ntry:\n    result = risky_operation()\nexcept ValueError as e:\n    print(f'Invalid value: {e}')\nexcept FileNotFoundError as e:\n    print(f'File missing: {e}')\n```", 
                    zh: "💡 捕获具体的异常类型\n\n```python\ntry:\n    result = risky_operation()\nexcept ValueError as e:\n    print(f'无效值: {e}')\nexcept FileNotFoundError as e:\n    print(f'文件缺失: {e}')\n```" 
                },
                { 
                    en: "💡 Use finally for cleanup\n\n```python\ntry:\n    file = open('data.txt')\n    process_data(file)\nexcept Exception as e:\n    handle_error(e)\nfinally:\n    file.close()\n```", 
                    zh: "💡 使用finally进行清理\n\n```python\ntry:\n    file = open('data.txt')\n    process_data(file)\nexcept Exception as e:\n    handle_error(e)\nfinally:\n    file.close()\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• Exception handling prevents crashes in production AI systems\n• Always catch specific exception types like `ValueError` or `FileNotFoundError`\n• Never use bare `except:` - provide meaningful error messages for debugging!",
                zh: "🎯 **核心要点**：\n• 异常处理防止生产AI系统崩溃\n• 始终捕获具体异常类型如`ValueError`或`FileNotFoundError`\n• 绝不使用裸露的`except:` - 提供有意义的错误信息便于调试！"
            }
        },
        {
            id: "lambda",
            title: { en: "🔥 Lambda & Functional Magic", zh: "🔥 Lambda与函数式编程" },
            subtitle: { en: "One-Line Functions That Pack a Punch", zh: "一行搞定的强大函数" },
            description: { en: "One-line anonymous functions - Pandas and ML libraries use these extensively! 🥋", zh: "一行匿名函数 - Pandas和ML库大量使用这些！🥋" },
            badExample: {
                en: `# ❌ Creating functions for simple operations
def add_one(x):
    return x + 1

numbers = [1, 2, 3, 4, 5]
result = []
for num in numbers:
    result.append(add_one(num))

# ❌ Too complex lambda (hard to read)
complex = lambda x, y: x**2 + y**2 if x > 0 and y > 0 else 0`,
                zh: `# ❌ 为简单操作创建函数
def add_one(x):
    return x + 1

numbers = [1, 2, 3, 4, 5]
result = []
for num in numbers:
    result.append(add_one(num))

# ❌ 过于复杂的lambda（难以阅读）
complex = lambda x, y: x**2 + y**2 if x > 0 and y > 0 else 0`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Clean data processing
scores = [85, 92, 78, 96, 89]
normalized = [(s-80)/20 for s in scores]

# Pandas data transformation
df = pd.DataFrame({'score': scores})
df['grade'] = df['score'].apply(lambda x: 'A' if x >= 90 else 'B')

# Sort students
students = [('Alice', 85), ('Bob', 92)]
top = sorted(students, key=lambda x: x[1], reverse=True)

# Filter valid data
data = [1, -2, 3, 0, 5]
valid = list(filter(lambda x: x > 0, data))`,
                zh: `# ✅ 最佳实践：简洁的数据处理
scores = [85, 92, 78, 96, 89]
normalized = [(s-80)/20 for s in scores]

# Pandas数据转换
df = pd.DataFrame({'score': scores})
df['grade'] = df['score'].apply(lambda x: 'A' if x >= 90 else 'B')

# 排序学生
students = [('Alice', 85), ('Bob', 92)]
top = sorted(students, key=lambda x: x[1], reverse=True)

# 过滤有效数据
data = [1, -2, 3, 0, 5]
valid = list(filter(lambda x: x > 0, data))`
            },
            tips: [
                { 
                    en: "💡 Basic lambda syntax\n\n```python\n# Simple transformations\nsquare = lambda x: x**2\ndata = [1, 2, 3, 4]\nresult = list(map(square, data))\n```", 
                    zh: "💡 基本lambda语法\n\n```python\n# 简单转换\nsquare = lambda x: x**2\ndata = [1, 2, 3, 4]\nresult = list(map(square, data))\n```" 
                },
                { 
                    en: "💡 Use with pandas and data processing\n\n```python\n# Common in data science\ndf['scaled'] = df['values'].apply(lambda x: x / 100)\nfiltered = filter(lambda x: x > 0.5, scores)\n```", 
                    zh: "💡 与pandas和数据处理结合\n\n```python\n# 在数据科学中常见\ndf['scaled'] = df['values'].apply(lambda x: x / 100)\nfiltered = filter(lambda x: x > 0.5, scores)\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• Lambda functions are anonymous one-line functions for simple operations\n• Widely used in pandas `.apply()`, sorting with `key=`, and data filtering\n• Keep them simple - if you need multiple lines, use a regular function!",
                zh: "🎯 **核心要点**：\n• Lambda函数是用于简单操作的匿名一行函数\n• 在pandas的`.apply()`、`key=`排序和数据过滤中广泛使用\n• 保持简洁 - 需要多行就用常规函数！"
            }
        },
        {
            id: "strings",
            title: { en: "📝 String Formatting Hell", zh: "📝 字符串格式化地狱" },
            subtitle: { en: "So Many Ways to Format, So Easy to Mess Up", zh: "这么多格式化方法，这么容易搞砸" },
            description: { en: "Master f-strings for clean AI logging and output - poor formatting leads to unreadable results! 😤", zh: "掌握f-strings以实现清洁的AI日志和输出 - 糟糕的格式化会导致结果不可读！😤" },
            badExample: {
                en: `# ❌ Old-style % formatting
name = "Alice"
score = 0.8567
print("Student %s scored %f" % (name, score))  # Too many decimals!

# ❌ No formatting (ugly output)
print("Accuracy:", 0.8567893245)  # Too many decimals
print("Training time:", 3661, "seconds")  # Hard to read`,
                zh: `# ❌ 旧式%格式化
name = "Alice"
score = 0.8567
print("Student %s scored %f" % (name, score))  # 小数位太多!

# ❌ 没有格式化（难看的输出）
print("Accuracy:", 0.8567893245)  # 小数位太多
print("Training time:", 3661, "seconds")  # 难以阅读`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Clean output formatting
name, score = "Alice", 0.8567
print(f"Student {name} score: {score:.1%}")

# Training logs
epoch, acc, loss = 10, 0.8567, 0.2341
print(f"Epoch {epoch:2d} | Accuracy: {acc:.3f} | Loss: {loss:.3f}")

# Time tracking
import time
start = time.time()
# ... model training ...
duration = time.time() - start
print(f"Training time: {duration:.1f}s")

# Model comparison
models = [("ResNet", 0.856), ("VGG", 0.834)]
for name, acc in models:
    print(f"{name:>8}: {acc:.1%}")`,
                zh: `# ✅ 最佳实践：清晰的输出格式
name, score = "Alice", 0.8567
print(f"学生 {name} 得分: {score:.1%}")

# 训练日志
epoch, acc, loss = 10, 0.8567, 0.2341
print(f"轮次 {epoch:2d} | 准确率: {acc:.3f} | 损失: {loss:.3f}")

# 时间记录
import time
start = time.time()
# ... 模型训练 ...
duration = time.time() - start
print(f"训练耗时: {duration:.1f}秒")

# 模型比较
models = [("ResNet", 0.856), ("VGG", 0.834)]
for name, acc in models:
    print(f"{name:>8}: {acc:.1%}")`
            },
            tips: [
                { 
                    en: "💡 Use f-strings for clean formatting\n\n```python\nname = 'Python'\nversion = 3.9\nmessage = f'Welcome to {name} {version}!'\n# Result: 'Welcome to Python 3.9!'\n```", 
                    zh: "💡 使用f-字符串进行清洁格式化\n\n```python\nname = 'Python'\nversion = 3.9\nmessage = f'Welcome to {name} {version}!'\n# 结果：'Welcome to Python 3.9!'\n```" 
                },
                { 
                    en: "💡 Format numbers with precision\n\n```python\npi = 3.14159\nprint(f'Pi: {pi:.2f}')\naccuracy = 0.8547\nprint(f'Accuracy: {accuracy:.1%}')\n# Output: Pi: 3.14, Accuracy: 85.5%\n```", 
                    zh: "💡 精确格式化数字\n\n```python\npi = 3.14159\nprint(f'Pi: {pi:.2f}')\naccuracy = 0.8547\nprint(f'Accuracy: {accuracy:.1%}')\n# 输出：Pi: 3.14, Accuracy: 85.5%\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• F-strings (f'text {variable}') are modern Python's best string formatting method\n• Essential for clean AI model logging and training progress display\n• Master precision formatting like `:.2f` for decimals and `:.1%` for percentages!",
                zh: "🎯 **核心要点**：\n• F-字符串(f'文本 {变量}')是现代Python最佳字符串格式化方法\n• 对AI模型日志和训练进度显示至关重要\n• 掌握`:.2f`小数和`:.1%`百分比等精度格式化！"
            }
        },
        {
            id: "mutable",
            title: { en: "🔄 Mutable vs Immutable Traps", zh: "🔄 可变与不可变陷阱" },
            subtitle: { en: "When Variables Change Behind Your Back", zh: "当变量在你背后发生变化" },
            description: { en: "Mutable vs immutable objects - causes subtle bugs in AI pipelines when you modify training data accidentally! 🧠💥", zh: "可变与不可变对象 - 当你意外修改训练数据时会在AI管道中造成微妙错误！🧠💥" },
            badExample: {
                en: `# ❌ Dangerous default argument (mutable!)
def add_sample(sample, dataset=[]):  # BUG: [] is mutable!
    dataset.append(sample)
    return dataset

batch1 = add_sample("sample1")  # ["sample1"]
batch2 = add_sample("sample2")  # ["sample1", "sample2"] - OOPS!

# ❌ Unintended list modification
original = [1, 2, 3]
processed = original  # Reference, not copy!
processed.append(999)  # Modifies original too!

# ❌ Dictionary reference trap
config = {"lr": 0.01, "epochs": 100}
new_config = config  # Reference!
new_config["lr"] = 0.001  # Changes original!`,
                zh: `# ❌ 危险的默认参数（可变！）
def add_sample(sample, dataset=[]):  # 错误：[]是可变的！
    dataset.append(sample)
    return dataset

batch1 = add_sample("sample1")  # ["sample1"]
batch2 = add_sample("sample2")  # ["sample1", "sample2"] - 糟糕！

# ❌ 意外的列表修改
original = [1, 2, 3]
processed = original  # 引用，不是副本！
processed.append(999)  # 也修改了原始数据！

# ❌ 字典引用陷阱
config = {"lr": 0.01, "epochs": 100}
new_config = config  # 引用！
new_config["lr"] = 0.001  # 改变了原始值！`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Safe default parameters
def add_data(item, dataset=None):
    if dataset is None:
        dataset = []
    dataset.append(item)
    return dataset

# Safe data copying
original = [1, 2, 3, 4]
backup = original.copy()
backup.append(5)  # Doesn't affect original

# Configuration management
base_config = {"lr": 0.01, "epochs": 10}
test_config = base_config.copy()
test_config["lr"] = 0.001

# Immutable types are safer
scores = (85, 92, 78)  # Tuples are immutable
name = "Python"  # Strings are immutable`,
                zh: `# ✅ 最佳实践：安全的默认参数
def add_data(item, dataset=None):
    if dataset is None:
        dataset = []
    dataset.append(item)
    return dataset

# 安全复制数据
original = [1, 2, 3, 4]
backup = original.copy()
backup.append(5)  # 不影响原数据

# 配置管理
base_config = {"lr": 0.01, "epochs": 10}
test_config = base_config.copy()
test_config["lr"] = 0.001

# 不可变类型更安全
scores = (85, 92, 78)  # 元组不可变
name = "Python"  # 字符串不可变`
            },
            tips: [
                { 
                    en: "💡 Safe default parameters with None\n\n```python\ndef add_item(item, my_list=None):\n    if my_list is None:\n        my_list = []\n    my_list.append(item)\n    return my_list\n```", 
                    zh: "💡 使用None安全处理默认参数\n\n```python\ndef add_item(item, my_list=None):\n    if my_list is None:\n        my_list = []\n    my_list.append(item)\n    return my_list\n```" 
                },
                { 
                    en: "💡 Know immutable vs mutable types\n\n```python\n# Safe: int, str, tuple\ndef greet(name, count=1):\n    return name * count\n\n# Dangerous: list, dict, set\n# Don't use as defaults!\n```", 
                    zh: "💡 了解不可变vs可变类型\n\n```python\n# 安全：int, str, tuple\ndef greet(name, count=1):\n    return name * count\n\n# 危险：list, dict, set\n# 不要用作默认值！\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• Mutable objects (list, dict, set) can cause unexpected bugs in AI pipelines\n• Never use mutable types as function default parameters - use `None` instead\n• Always copy data with `.copy()` when you need independent modifications!",
                zh: "🎯 **核心要点**：\n• 可变对象(list, dict, set)会在AI管道中引起意外错误\n• 绝不使用可变类型作为函数默认参数 - 用`None`代替\n• 需要独立修改时始终用`.copy()`复制数据！"
            }
        },
        {
            id: "init",
            title: { en: "📦 Python Packages: __init__.py vs Namespace", zh: "📦 Python包：__init__.py vs 命名空间" },
            subtitle: { en: "Modern Package Management in Python 3.3+", zh: "Python 3.3+的现代包管理" },
            description: { en: "Traditional vs namespace packages - understanding when to use __init__.py in modern Python! 📚", zh: "传统包vs命名空间包 - 理解现代Python中何时使用__init__.py！📚" },
            badExample: {
                en: `# ❌ Old thinking: "Always need __init__.py"
# This WORKS in Python 3.3+ without __init__.py:
my_project/
├── models/          # No __init__.py - but works!
│   ├── cnn.py
│   └── rnn.py
└── utils/
    └── helpers.py

# ❌ But you lose control over imports:
from my_project.models.cnn import CNNModel  # Works but verbose
from my_project.models import CNNModel      # This WON'T work!

# ❌ Dangerous: Can't prevent wildcard imports
# Without __init__.py, users might do:
from my_project.models.cnn import *  # Imports everything!
# No __all__ to control what gets imported

# ❌ No package-level attributes
# Can't do: my_project.__version__
# Can't control what gets imported publicly`,
                zh: `# ❌ 旧思维："总是需要__init__.py"
# 在Python 3.3+中没有__init__.py也能工作：
my_project/
├── models/          # 没有__init__.py - 但能工作！
│   ├── cnn.py
│   └── rnn.py
└── utils/
    └── helpers.py

# ❌ 但你失去了对导入的控制：
from my_project.models.cnn import CNNModel  # 能工作但冗长
from my_project.models import CNNModel      # 这不会工作！

# ❌ 危险：无法防止通配符导入
# 没有__init__.py，用户可能会：
from my_project.models.cnn import *  # 导入所有内容！
# 没有__all__来控制导入什么

# ❌ 没有包级别属性
# 不能：my_project.__version__
# 无法控制公开导入什么`
            },
            bestPractice: {
                en: `# ✅ Modern Best Practice: Use __init__.py for import control
ai_project/
├── __init__.py      # Controls package-level imports
├── models/
│   ├── __init__.py  # Controls wildcard imports with __all__
│   └── neural_net.py
└── utils/           # No __init__.py = namespace package
    └── data_loader.py

# CRITICAL: __init__.py prevents dangerous imports
# models/__init__.py
from .neural_net import NeuralNetwork, ModelTrainer
# Control what's available for import:
__all__ = ['NeuralNetwork']  # Only this gets imported with *

# This protects users from dangerous wildcard imports:
# from ai_project.models import *  # Only imports NeuralNetwork!

# models/neural_net.py
class NeuralNetwork:
    def __init__(self): pass

class ModelTrainer:  # Private - not in __all__
    def __init__(self): pass

def _helper_function():  # Private by convention
    pass

# __init__.py (main package)
from .models import NeuralNetwork
__version__ = "1.0.0"
__author__ = "Algonquin AI Team"
__all__ = ['NeuralNetwork']  # Control package-level imports

# Safe, controlled imports
from ai_project import NeuralNetwork  # ✅ Safe!
from ai_project import *  # ✅ Only imports NeuralNetwork!`,
                zh: `# ✅ 现代最佳实践：使用__init__.py控制导入
ai_project/
├── __init__.py      # 控制包级别导入
├── models/
│   ├── __init__.py  # 用__all__控制通配符导入
│   └── neural_net.py
└── utils/           # 没有__init__.py = 命名空间包
    └── data_loader.py

# 关键：__init__.py防止危险导入
# models/__init__.py
from .neural_net import NeuralNetwork, ModelTrainer
# 控制可导入的内容：
__all__ = ['NeuralNetwork']  # 只有这个会被*导入

# 这保护用户免受危险的通配符导入：
# from ai_project.models import *  # 只导入NeuralNetwork！

# models/neural_net.py
class NeuralNetwork:
    def __init__(self): pass

class ModelTrainer:  # 私有 - 不在__all__中
    def __init__(self): pass

def _helper_function():  # 按惯例私有
    pass

# __init__.py (主包)
from .models import NeuralNetwork
__version__ = "1.0.0"
__author__ = "亚岗昆AI团队"
__all__ = ['NeuralNetwork']  # 控制包级别导入

# 安全、受控的导入
from ai_project import NeuralNetwork  # ✅ 安全！
from ai_project import *  # ✅ 只导入NeuralNetwork！`
            },
            tips: [
                { 
                    en: "💡 Use __all__ to control wildcard imports safely\n\n```python\n# mypackage/__init__.py\nfrom .module1 import PublicClass\nfrom .module2 import AnotherClass, helper_function\n\n# Only these get imported with 'from mypackage import *'\n__all__ = ['PublicClass', 'AnotherClass']\n# helper_function is NOT included - stays private!\n```", 
                    zh: "💡 使用__all__安全控制通配符导入\n\n```python\n# mypackage/__init__.py\nfrom .module1 import PublicClass\nfrom .module2 import AnotherClass, helper_function\n\n# 只有这些会被'from mypackage import *'导入\n__all__ = ['PublicClass', 'AnotherClass']\n# helper_function不包含 - 保持私有！\n```" 
                },
                { 
                    en: "💡 Protect your users from dangerous imports\n\n```python\n# Without __init__.py: DANGEROUS!\n# Users can do: from mypackage.internal import *\n# Imports everything, including private functions!\n\n# With __init__.py + __all__: SAFE!\n# from mypackage import *  # Only imports what you allow\n```", 
                    zh: "💡 保护用户免受危险导入\n\n```python\n# 没有__init__.py：危险！\n# 用户可以：from mypackage.internal import *\n# 导入所有内容，包括私有函数！\n\n# 有__init__.py + __all__：安全！\n# from mypackage import *  # 只导入你允许的\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• **__init__.py is essential for controlling wildcard imports** with `__all__`\n• Without it, users can `from your_module import *` and import everything!\n• **Always use __init__.py + __all__** to define what's safe to import publicly!",
                zh: "🎯 **核心要点**：\n• **__init__.py对用`__all__`控制通配符导入至关重要**\n• 没有它，用户可以`from your_module import *`导入所有内容！\n• **始终使用__init__.py + __all__**来定义可安全公开导入的内容！"
            }
        },
        {
            id: "imports",
            title: { en: "📥 Import Statement Confusion", zh: "📥 Import语句混乱" },
            subtitle: { en: "The Gateway to Python's Power", zh: "通往Python力量的大门" },
            description: { en: "Python import system - master this to use any AI library efficiently! 🔑", zh: "Python导入系统 - 掌握它才能高效使用任何AI库！🔑" },
            badExample: {
                en: `# ❌ Wildcard imports (namespace pollution!)
from torch import *  # Imports 1000+ names!
from numpy import *
from pandas import *
# Now you have naming conflicts: array(), mean(), etc.

# ❌ Wrong import syntax
import tensorflow.keras.layers.Dense  # Can't import like this!
import numpy  # Should use alias for long usage

# ❌ Naming conflicts example
from math import *  # Imports sqrt, sin, cos, etc.
from numpy import *  # Also imports sqrt, sin, cos, etc.
# Which sqrt() are you using? math.sqrt or numpy.sqrt?

# ❌ Imports in wrong place
def train_model():
    import torch  # Should be at top!
    # training code...`,
                zh: `# ❌ 通配符导入（命名空间污染！）
from torch import *  # 导入1000多个名称！
from numpy import *
from pandas import *
# 现在有命名冲突：array(), mean()等

# ❌ 错误的导入语法
import tensorflow.keras.layers.Dense  # 不能这样导入！
import numpy  # 长期使用应该用别名

# ❌ 命名冲突示例
from math import *  # 导入sqrt, sin, cos等
from numpy import *  # 也导入sqrt, sin, cos等
# 你使用的是哪个sqrt()？math.sqrt还是numpy.sqrt？

# ❌ 导入位置错误
def train_model():
    import torch  # 应该在顶部！
    # 训练代码...`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Clean, specific imports
# Standard library first
import os
import json
import math

# Third-party libraries with aliases
import numpy as np
import pandas as pd
import torch
import torch.nn as nn
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Project modules (specific imports)
from .models import NeuralNetwork
from .utils import load_config, preprocess_data

# Clear usage - no naming conflicts!
def calculate_accuracy(predictions, targets):
    # Clear which functions we're using
    result = accuracy_score(targets, predictions)
    loss = nn.CrossEntropyLoss()(predictions, targets)
    std_dev = np.std(predictions)
    return result, loss, std_dev

# AI project structure
class ModelTrainer:
    def __init__(self):
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    
    def train(self, data_path):
        data = pd.read_csv(data_path)
        return self.model.fit(data)`,
                zh: `# ✅ 最佳实践：清晰、具体的导入
# 标准库优先
import os
import json
import math

# 第三方库使用别名
import numpy as np
import pandas as pd
import torch
import torch.nn as nn
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# 项目模块（具体导入）
from .models import NeuralNetwork
from .utils import load_config, preprocess_data

# 清晰使用 - 没有命名冲突！
def calculate_accuracy(predictions, targets):
    # 清楚我们使用的是哪些函数
    result = accuracy_score(targets, predictions)
    loss = nn.CrossEntropyLoss()(predictions, targets)
    std_dev = np.std(predictions)
    return result, loss, std_dev

# AI项目结构
class ModelTrainer:
    def __init__(self):
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    
    def train(self, data_path):
        data = pd.read_csv(data_path)
        return self.model.fit(data)`
            },
            tips: [
                { 
                    en: "💡 Never use wildcard imports (*)\n\n```python\n# ❌ BAD: Creates naming conflicts\nfrom numpy import *\nfrom math import *\n# Now sqrt() is ambiguous!\n\n# ✅ GOOD: Use module names\nimport numpy as np\nimport math\nnp.sqrt(16)  # Clear!\nmath.sqrt(16)  # Clear!\n```", 
                    zh: "💡 绝不使用通配符导入(*)\n\n```python\n# ❌ 糟糕：创建命名冲突\nfrom numpy import *\nfrom math import *\n# 现在sqrt()不明确！\n\n# ✅ 好：使用模块名\nimport numpy as np\nimport math\nnp.sqrt(16)  # 清晰！\nmath.sqrt(16)  # 清晰！\n```" 
                },
                { 
                    en: "💡 Use specific imports for clarity\n\n```python\n# ✅ GOOD: Specific imports\nfrom sklearn.model_selection import train_test_split\nfrom torch import nn, optim\n\n# ❌ BAD: Wildcard imports\nfrom sklearn import *  # Imports 100+ names!\nfrom torch import *    # Namespace pollution!\n```", 
                    zh: "💡 使用具体导入以提高清晰度\n\n```python\n# ✅ 好：具体导入\nfrom sklearn.model_selection import train_test_split\nfrom torch import nn, optim\n\n# ❌ 糟糕：通配符导入\nfrom sklearn import *  # 导入100多个名称！\nfrom torch import *    # 命名空间污染！\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• **NEVER use `from module import *`** - causes naming conflicts and namespace pollution\n• **GOOD: `from module import specific_function`** - imports only what you need\n• **GOOD: `import module_name`** - keeps namespaces clear\n• This prevents naming problems that can break AI models and data processing pipelines!",
                zh: "🎯 **核心要点**：\n• **绝不使用`from module import *`** - 导致命名冲突和命名空间污染\n• **好：`from module import specific_function`** - 只导入需要的内容\n• **好：`import module_name`** - 保持命名空间清晰\n• 这防止可能破坏AI模型和数据处理管道的命名问题！"
            }
        },
        {
            id: "pycache",
            title: { en: "📁 __pycache__ Mystery", zh: "📁 __pycache__ 神秘文件夹" },
            subtitle: { en: "Those Weird Folders That Keep Appearing", zh: "那些不断出现的奇怪文件夹" },
            description: { en: "Python's auto-generated compiled files - helps with deployment and version control in AI projects! 🕵️", zh: "Python自动生成的编译文件 - 有助于AI项目的部署和版本控制！🕵️" },
            badExample: {
                en: `# ❌ What beginners think:
# "Some virus created these folders!"
# "My code is broken because of these!"
# "I should delete these every time!"

# ❌ Adding to git (don't do this)
# git add __pycache__/  # Pollutes repository

# ❌ Manually creating
# mkdir __pycache__  # Python does this automatically`,
                zh: `# ❌ 初学者的想法：
# "某个病毒创建了这些文件夹！"
# "我的代码因为这些而坏了！"
# "我应该每次都删除这些！"

# ❌ 添加到git（不要这样做）
# git add __pycache__/  # 污染仓库

# ❌ 手动创建
# mkdir __pycache__  # Python会自动完成这个`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Understand and manage cache
"""
__pycache__ is automatically generated by Python:
- Stores compiled bytecode
- Speeds up module imports
- Updates automatically when source changes
"""

# .gitignore configuration
"""
__pycache__/
*.pyc
*.log
.env

# AI project specific
*.pkl
*.h5
data/raw/
models/saved/
"""

# When to clean
"""
Clean when:
- Switching Python versions
- Import errors occur
- Before deployment

Command: find . -name __pycache__ -delete
"""`,
                zh: `# ✅ 最佳实践：理解并管理缓存
"""
__pycache__ 是Python自动生成的：
- 存储编译后的字节码
- 加速模块导入
- 源码改变时自动更新
"""

# .gitignore配置
"""
__pycache__/
*.pyc
*.log
.env

# AI项目特定
*.pkl
*.h5
data/raw/
models/saved/
"""

# 清理时机
"""
何时清理：
- 切换Python版本
- 导入错误
- 部署前

命令：find . -name __pycache__ -delete
"""`
            },
            tips: [
                { 
                    en: "💡 Best Practice: Add to .gitignore for clean repos\n\n```gitignore\n# Create .gitignore file\n__pycache__/\n*.pyc\n*.pyo\n*.pyd\n.Python\nbuild/\ndist/\n*.egg-info/\n\n# This keeps your repo clean!\n```", 
                    zh: "💡 最佳实践：添加到.gitignore保持仓库整洁\n\n```gitignore\n# 创建.gitignore文件\n__pycache__/\n*.pyc\n*.pyo\n*.pyd\n.Python\nbuild/\ndist/\n*.egg-info/\n\n# 这能保持你的仓库整洁！\n```" 
                },
                { 
                    en: "💡 Best Practice: Understand what they do\n\n```bash\n# __pycache__ contains compiled bytecode\n# Faster import times on subsequent runs\n# Python automatically manages these\n# Safe to delete - will be recreated\n\n# Command to clean them:\nfind . -name '__pycache__' -type d -exec rm -rf {} +\n```", 
                    zh: "💡 最佳实践：理解它们的作用\n\n```bash\n# __pycache__包含编译的字节码\n# 后续运行时更快的导入时间\n# Python自动管理这些\n# 可以安全删除 - 会被重新创建\n\n# 清理命令：\nfind . -name '__pycache__' -type d -exec rm -rf {} +\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• __pycache__ folders contain compiled bytecode that speeds up Python imports\n• They're automatically generated and safe to delete - Python will recreate them\n• Always add __pycache__/ to your .gitignore file!",
                zh: "🎯 **核心要点**：\n• __pycache__文件夹包含加速Python导入的编译字节码\n• 它们自动生成且可安全删除 - Python会重新创建\n• 始终将__pycache__/添加到.gitignore文件！"
            }
        },
        {
            id: "venv",
            title: { en: "🔄 Virtual Environment Hell", zh: "🔄 虚拟环境地狱" },
            subtitle: { en: "When pip install Breaks Everything", zh: "当pip install搞坏一切时" },
            description: { en: "Python virtual environments - essential for AI projects but confusing for beginners! 🐍💼", zh: "Python虚拟环境 - 对AI项目至关重要但初学者容易困惑！🐍💼" },
            badExample: {
                en: `# ❌ Installing globally (dangerous!)
pip install tensorflow  # Installs for everyone!
pip install torch==1.8.0
pip install torch==2.0.0  # Conflicts with above!

# ❌ Wrong activation (Windows)
# activate venv  # Missing path!
# source venv/bin/activate  # Wrong OS command!

# ❌ Forgetting to activate
# pip install pandas  # Goes to global Python!
# python train.py  # "ModuleNotFoundError: No module named 'pandas'"

# ❌ Multiple Python versions chaos
# python -m pip install numpy  # Python 3.8
# python3 -m pip install numpy  # Python 3.9
# py -3.10 -m pip install numpy  # Python 3.10
# Where did my packages go?!`,
                zh: `# ❌ 全局安装（危险！）
pip install tensorflow  # 为所有人安装！
pip install torch==1.8.0
pip install torch==2.0.0  # 与上面冲突！

# ❌ 错误激活（Windows）
# activate venv  # 缺少路径！
# source venv/bin/activate  # 错误的OS命令！

# ❌ 忘记激活
# pip install pandas  # 安装到全局Python！
# python train.py  # "ModuleNotFoundError: No module named 'pandas'"

# ❌ 多Python版本混乱
# python -m pip install numpy  # Python 3.8
# python3 -m pip install numpy  # Python 3.9
# py -3.10 -m pip install numpy  # Python 3.10
# 我的包去哪了？！`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Modern project isolation
# Create virtual environment (modern convention)
python -m venv .venv

# Activate (Windows)
.venv\\Scripts\\activate

# Activate (Mac/Linux)
source .venv/bin/activate

# Verify activation - look for (.venv) in prompt
(.venv) $ which python  # Should show .venv path
(.venv) $ pip list  # Should be minimal

# Install AI packages safely
pip install --upgrade pip
pip install torch torchvision
pip install tensorflow
pip install pandas numpy scikit-learn

# Save dependencies
pip freeze > requirements.txt

# Deactivate when done
deactivate

# Standard .gitignore entry
echo ".venv/" >> .gitignore

# Recreate environment anywhere
python -m venv .venv
.venv\\Scripts\\activate  # Windows
pip install -r requirements.txt`,
                zh: `# ✅ 最佳实践：现代项目隔离
# 创建虚拟环境（现代约定）
python -m venv .venv

# 激活（Windows）
.venv\\Scripts\\activate

# 激活（Mac/Linux）
source .venv/bin/activate

# 验证激活 - 在提示符中查找(.venv)
(.venv) $ which python  # 应显示.venv路径
(.venv) $ pip list  # 应该很少

# 安全安装AI包
pip install --upgrade pip
pip install torch torchvision
pip install tensorflow
pip install pandas numpy scikit-learn

# 保存依赖
pip freeze > requirements.txt

# 完成后停用
deactivate

# 标准.gitignore条目
echo ".venv/" >> .gitignore

# 在任何地方重新创建环境
python -m venv .venv
.venv\\Scripts\\activate  # Windows
pip install -r requirements.txt`
            },
            tips: [
                { 
                    en: "💡 Always check if venv is active\n\n```bash\n# Look for (.venv) in your prompt:\n(.venv) C:\\Users\\Student> python\n\n# Or check Python path:\nwhich python\n# Should show: /path/to/your/.venv/bin/python\n```", 
                    zh: "💡 始终检查venv是否激活\n\n```bash\n# 在提示符中查找(.venv)：\n(.venv) C:\\Users\\Student> python\n\n# 或检查Python路径：\nwhich python\n# 应显示：/path/to/your/.venv/bin/python\n```" 
                },
                { 
                    en: "💡 Use requirements.txt for reproducibility\n\n```bash\n# Save current environment\npip freeze > requirements.txt\n\n# Share with teammates\ngit add requirements.txt\n\n# Recreate anywhere\npip install -r requirements.txt\n```", 
                    zh: "💡 使用requirements.txt保证可重现性\n\n```bash\n# 保存当前环境\npip freeze > requirements.txt\n\n# 与队友分享\ngit add requirements.txt\n\n# 在任何地方重新创建\npip install -r requirements.txt\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• Virtual environments prevent package conflicts and keep projects isolated\n• Always activate your venv before installing packages with pip\n• Use `requirements.txt` to share exact package versions with teammates!",
                zh: "🎯 **核心要点**：\n• 虚拟环境防止包冲突并保持项目隔离\n• 用pip安装包前始终激活venv\n• 使用`requirements.txt`与队友分享确切的包版本！"
            }
        },
        {
            id: "path",
            title: { en: "🗺️ PATH Environment Variable Chaos", zh: "🗺️ PATH环境变量混乱" },
            subtitle: { en: "Why 'python' is not recognized as a command", zh: "为什么'python'不被识别为命令" },
            description: { en: "PATH configuration nightmares - the #1 reason Python installations fail for beginners! 😵‍💫", zh: "PATH配置噩梦 - 初学者Python安装失败的头号原因！😵‍💫" },
            badExample: {
                en: `# ❌ Command not found errors
C:\\> python
'python' is not recognized as an internal or external command

# ❌ Wrong Python version
C:\\> python --version
Python 2.7.18  # Wait, I installed Python 3.10!

# ❌ Multiple Python installations
C:\\Python38\\python.exe  # Old installation
C:\\Python310\\python.exe  # New installation
C:\\Users\\AppData\\Local\\Microsoft\\WindowsApps\\python.exe  # Store version
# Which one is running?!

# ❌ pip confusion
C:\\> pip install tensorflow
# Installs to Python 2.7, but code runs on Python 3.10!

# ❌ IDE vs Command Line differences
# PyCharm works fine
# Command line: "No module named 'pandas'"`,
                zh: `# ❌ 命令未找到错误
C:\\> python
'python' 不是内部或外部命令

# ❌ 错误的Python版本
C:\\> python --version
Python 2.7.18  # 等等，我安装的是Python 3.10！

# ❌ 多个Python安装
C:\\Python38\\python.exe  # 旧安装
C:\\Python310\\python.exe  # 新安装
C:\\Users\\AppData\\Local\\Microsoft\\WindowsApps\\python.exe  # 商店版本
# 运行的是哪一个？！

# ❌ pip混乱
C:\\> pip install tensorflow
# 安装到Python 2.7，但代码在Python 3.10上运行！

# ❌ IDE与命令行差异
# PyCharm工作正常
# 命令行："No module named 'pandas'"`
            },
            bestPractice: {
                en: `# ✅ Best Practice: Clean PATH management

# Windows: Check current PATH
echo %PATH%

# Find all Python installations
where python
where pip

# Recommended Python installation path
C:\\Python310\\  # Clean, predictable location

# Manual PATH setup (Windows)
# System Properties > Environment Variables
# Add to PATH:
C:\\Python310\\
C:\\Python310\\Scripts\\

# Verify installation
python --version  # Should show Python 3.10.x
pip --version     # Should show pip for Python 3.10

# For AI development workflow
python -m venv .venv
.venv\\Scripts\\activate
(.venv) C:\\> python --version  # Isolated environment
(.venv) C:\\> pip install torch tensorflow pandas

# Mac/Linux: Use pyenv for version management
curl https://pyenv.run | bash
pyenv install 3.10.8
pyenv global 3.10.8`,
                zh: `# ✅ 最佳实践：清洁PATH管理

# Windows：检查当前PATH
echo %PATH%

# 找到所有Python安装
where python
where pip

# 推荐的Python安装路径
C:\\Python310\\  # 简洁、可预测的位置

# 手动PATH设置（Windows）
# 系统属性 > 环境变量
# 添加到PATH：
C:\\Python310\\
C:\\Python310\\Scripts\\

# 验证安装
python --version  # 应显示Python 3.10.x
pip --version     # 应显示Python 3.10的pip

# AI开发工作流
python -m venv .venv
.venv\\Scripts\\activate
(.venv) C:\\> python --version  # 隔离环境
(.venv) C:\\> pip install torch tensorflow pandas

# Mac/Linux：使用pyenv进行版本管理
curl https://pyenv.run | bash
pyenv install 3.10.8
pyenv global 3.10.8`
            },
            tips: [
                { 
                    en: "💡 Use 'py' launcher on Windows\n\n```cmd\n# Instead of 'python', use 'py'\npy --version\npy -3.10 --version  # Specific version\npy -m pip install pandas\npy -m venv myenv\n\n# Lists all installed Python versions\npy --list\n```", 
                    zh: "💡 在Windows上使用'py'启动器\n\n```cmd\n# 用'py'代替'python'\npy --version\npy -3.10 --version  # 特定版本\npy -m pip install pandas\npy -m venv myenv\n\n# 列出所有已安装的Python版本\npy --list\n```" 
                },
                { 
                    en: "💡 Always use python -m pip instead of just pip\n\n```bash\n# This ensures you're using the right Python's pip\npython -m pip install tensorflow\npython -m pip list\npython -m pip freeze > requirements.txt\n\n# Avoids version confusion!\n```", 
                    zh: "💡 始终使用python -m pip而不是仅pip\n\n```bash\n# 这确保你使用正确Python的pip\npython -m pip install tensorflow\npython -m pip list\npython -m pip freeze > requirements.txt\n\n# 避免版本混乱！\n```" 
                }
            ],
            summary: {
                en: "🎯 **Key Takeaway**:\n• PATH determines which Python version runs when you type 'python'\n• Use `py` launcher on Windows or `python -m` commands for clarity\n• Virtual environments solve most PATH-related issues by creating isolated environments!",
                zh: "🎯 **核心要点**：\n• PATH决定输入'python'时运行哪个Python版本\n• 在Windows上使用`py`启动器或`python -m`命令以提高清晰度\n• 虚拟环境通过创建隔离环境解决大多数PATH相关问题！"
            }
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = contentData;
}

// Make contentData available globally in browser
if (typeof window !== 'undefined') {
    window.contentData = contentData;
    console.log('✅ contentData exposed to window object');
    console.log('📊 Data loaded with sections:', Object.keys(contentData));
    console.log('🔍 Timeline items:', contentData.timeline?.length || 0);
    console.log('🔍 AI Libraries:', contentData.aiLibraries?.length || 0);
    console.log('🔍 Syntax challenges:', contentData.syntaxChallenges?.length || 0);
} else {
    console.log('⚠️ Not in browser environment');
} 